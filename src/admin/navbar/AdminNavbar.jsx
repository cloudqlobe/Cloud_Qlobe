import { useContext, useEffect, useState, useRef } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { getNavItems } from "./NavItems";
import AdminAuthContext from "../../context/admin/AdminAuthContext";
import axiosInstance from "../../utils/axiosinstance";
import AdminDropDown from "../auth/logout";

const Topbar = () => {
  const { adminDetails } = useContext(AdminAuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);

  console.log(adminDetails.role);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axiosInstance.get("api/customers");
        const data = response.data.customer;
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);

  const navItems = getNavItems(adminDetails?.role);
  console.log(navItems);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredCustomers([]);
      setShowSearchResults(false);
      return;
    }

    setIsSearching(true);
    const query = searchQuery.toLowerCase();

    const results = customers.filter((customer) => {
      if (customer.companyName?.toLowerCase().includes(query)) {
        return true;
      }

      if (customer.switchIps) {
        try {
          const ips = JSON.parse(customer.switchIps);
          if (Array.isArray(ips)) {
            return ips.some(
              (ipObj) => ipObj.ip && ipObj.ip.toLowerCase().includes(query)
            );
          }
        } catch (e) {
          console.error("Error parsing switchIps:", e);
        }
      }
      return false;
    });

    setFilteredCustomers(results);
    setShowSearchResults(true);
    setIsSearching(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim()) {
      handleSearch();
    } else {
      setFilteredCustomers([]);
      setShowSearchResults(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filteredItems = navItems.filter((item) => {
    if (!Array.isArray(item?.roles)) return false;
    return item.roles.includes("all") || item.roles.includes(adminDetails?.role);
  });

  console.log(filteredItems);

  const SearchResultsDropdown = () => {
    if (!showSearchResults) return null;

    return (
      <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
        {isSearching ? (
          <div className="px-4 py-2 text-gray-500">Searching...</div>
        ) : filteredCustomers.length === 0 ? (
          <div className="px-4 py-2 text-gray-500">No results found</div>
        ) : (
          filteredCustomers.map((customer) => (
            <a
              key={customer.id}
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200 last:border-b-0 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                setSearchQuery(customer.companyName);
                setShowSearchResults(false);
              }}
            >
              <div className="font-medium">{customer.companyName}</div>
              {customer.switchIps && (
                <div className="text-xs text-gray-500">
                  IPs:{" "}
                  {JSON.parse(customer.switchIps)
                    .map((ip) => ip.ip)
                    .filter((ip) => ip)
                    .join(", ")}
                </div>
              )}
            </a>
          ))
        )}
      </div>
    );
  };

  const renderMobileItem = (item) => {
    if (item.href) {
      return (
        <a
          href={item.href}
          className="block px-6 py-3 text-gray-600 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex items-center">
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </div>
        </a>
      );
    }

    return (
      <details key={item.id} className="group">
        <summary className="flex justify-between items-center px-6 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer list-none">
          <div className="flex items-center">
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </div>
          <ChevronRightIcon className="w-5 h-5 ml-1 text-gray-500 group-open:rotate-90 transform transition" />
        </summary>
        <div className="pl-6">
          {item.subItems?.map((subItem, index) =>
            subItem.href ? (
              <a
                key={index}
                href={subItem.href}
                className="block px-3 py-2 text-gray-600 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {subItem.label}
              </a>
            ) : subItem.subMenu ? (
              <details key={index} className="group">
                <summary className="flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer list-none">
                  {subItem.label}
                  <ChevronRightIcon className="w-5 h-5 ml-1 text-gray-500 group-open:rotate-90 transform transition" />
                </summary>
                <div className="pl-3">
                  {subItem.items.map((menuItem, menuIndex) => (
                    <a
                      key={menuIndex}
                      href={menuItem.href}
                      className="block px-3 py-2 text-gray-600 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {menuItem.label}
                    </a>
                  ))}
                </div>
              </details>
            ) : null
          )}
        </div>
      </details>
    );
  };

  return (
    <header className="w-full p-4 bg-white shadow-xl border-b-4 border-gray-300 flex items-center justify-between">
        
      {/* Desktop Navbar */}
{/* Desktop Navbar */}
<nav className="hidden md:flex space-x-6 ml-6">
  {filteredItems.map((item) => (
    <div key={item.id} className="relative group">
      {item.href ? (
        <a
          href={item.href}
          className="flex items-center text-gray-700 hover:text-indigo-600"
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.label}
        </a>
      ) : (
        <div className="flex items-center text-gray-700 cursor-pointer group-hover:text-indigo-600">
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.label}
        </div>
      )}

      {/* Dropdown for subItems */}
      {item.subItems && (
        <div className="absolute left-0 hidden group-hover:block bg-white border mt-2 rounded shadow-lg z-50 min-w-[200px]">
          {item.subItems.map((sub, idx) =>
            sub.subMenu ? (
              <div key={idx} className="relative group/sub">
                <div className="flex justify-between items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  {sub.label}
                  <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                </div>

                {/* Nested submenu */}
                <div className="absolute top-0 left-full hidden group-hover/sub:block bg-white border rounded shadow-lg z-50 min-w-[200px]">
                  {sub.items.map((menuItem, menuIdx) => (
                    <a
                      key={menuIdx}
                      href={menuItem.href}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      {menuItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={idx}
                href={sub.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                {sub.label}
              </a>
            )
          )}
        </div>
      )}
    </div>
  ))}
</nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        <Bars3Icon className="w-8 h-8" />
      </button>

      {/* Search Bar */}
      <div
        className="hidden md:flex items-center mx-4 flex-1"
        style={{ maxWidth: "600px", position: "relative" }}
      >
        <div className="relative w-full mr-3" ref={searchRef}>
          <input
            type="text"
            placeholder="Search by company name or IP..."
            className="w-full py-2 px-4 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setShowSearchResults(true)}
            onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
          />
          <MagnifyingGlassIcon
            className="w-5 h-5 text-gray-400 absolute right-3 top-2.5 cursor-pointer hover:text-gray-600 transition-colors"
            onClick={handleSearch}
          />
          <SearchResultsDropdown />
        </div>
        <button
          className="flex items-center text-white px-4 py-2 text-sm transition-all duration-300 ease-in-out
          bg-green-600 hover:bg-green-700 active:bg-green-800 shadow-md hover:shadow-lg active:shadow-sm"
          onClick={handleSearch}
        >
          <MagnifyingGlassIcon className="w-5 h-6 mr-2 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-sm font-medium tracking-wide">SEARCH</span>
        </button>
      </div>

      <div className="relative">
        <AdminDropDown />
      </div>

    </header>
  );
};

export default Topbar;
