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
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);

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

  const DesktopNavItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [subMenuOpenIndex, setSubMenuOpenIndex] = useState(null);
    const dropdownRef = useRef(null);

    const toggleSubMenu = (index) => {
      setSubMenuOpenIndex(subMenuOpenIndex === index ? null : index);
    };

    const subItemCount = item.subItems ? item.subItems.length : 0;
    const shouldReduceHeight = subItemCount <= 6;

    // Handle click outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    if (item.href) {
      return (
        <div key={item.id}>
          <a 
            href={item.href} 
            className="flex items-center text-gray-600 hover:text-indigo-600 text-base focus:outline-none"
          >
            {item.icon}
            {item.label}
          </a>
        </div>
      );
    }

    return (
      <div key={item.id} className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-600 hover:text-indigo-600 text-base focus:outline-none"
        >
          {item.icon}
          {item.label}
        </button>

        {isOpen && item.subItems && (
          <div
            className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg z-10 w-[600px] p-4"
            style={{
              width: "100vw",
              position: "fixed",
              marginTop: "28px",
              background: "#efefef",
              minHeight: shouldReduceHeight ? "auto" : "39vh",
              left: 0
            }}
          >
            <div style={{ 
              display: "flex", 
              width: "100%", 
              height: "100%", 
              justifyContent: "space-evenly" 
            }}>
              <div style={{
                background: "white",
                borderRadius: "3%",
                display: "flex",
                flexDirection: "column",
                width: "25%",
                paddingLeft: "40px",
                textAlign: "justify",
                justifyContent: "center",
                border: "none",
                height: "auto"
              }}>
                <h5 style={{ fontWeight: "bold", marginBottom: '8px' }}>{item.label}</h5>
                <p style={{ fontSize: "0.9rem" }}>Description about {item.label} section</p>
              </div>

              <div 
                className="grid grid-cols-3"
                style={{
                  gap: "35px",
                  width: "72%",
                  background: "white",
                  padding: "15px",
                  borderRadius: "10px",
                  height: "100%",
                }}
              >
                {item.subItems.map((subItem, index) => (
                  <div key={index}>
                    {subItem.href ? (
                      <a
                        href={subItem.href}
                        className="block p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="font-medium text-gray-800" style={{ fontSize: "0.9rem" }}>
                          {subItem.label}
                        </div>
                        {subItem.description && (
                          <div className="text-sm text-gray-500 mt-1">{subItem.description}</div>
                        )}
                      </a>
                    ) : subItem.subMenu ? (
                      <div className="p-2 bg-gray-100 rounded-lg transition-colors cursor-pointer" style={{height:"45px"}}>
                        <div 
                          onClick={() => toggleSubMenu(index)} 
                          className="flex justify-between items-center p-1"
                        >
                          <div className="font-medium text-gray-800" style={{ fontSize: "0.9rem" }}>
                            {subItem.label}
                          </div>
                          <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                        </div>
                        {subItem.description && (
                          <div className="text-sm text-gray-500 mt-1">{subItem.description}</div>
                        )}
                      {subMenuOpenIndex === index && (
                        <div
                          className="absolute grid grid-cols-3 bg-white shadow-lg border border-gray-200 rounded-lg p-4 z-20"
                          style={{
                            gap: "35px",
                            top: "100%",         // aligns it directly below the parent
                            left: "420px",           // starts from the parent’s left edge
                            minWidth: "600px",
                            width: "1085px"   // optional width
                          }}
                        >
                          {subItem.items.map((menuItem, menuIndex) => (
                            <a
                              key={menuIndex}
                              href={menuItem.href}
                              className="block p-2 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              <div className="font-medium text-gray-800">{menuItem.label}</div>
                              {menuItem.description && (
                                <div className="text-sm text-gray-500 mt-1">{menuItem.description}</div>
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
      <nav className="hidden md:flex space-x-6 ml-6">
        {filteredItems.map((item) => (
          <DesktopNavItem key={item.id} item={item} />
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        <Bars3Icon className="w-8 h-8" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
          <div className="py-2">
            {filteredItems.map((item) => renderMobileItem(item))}
          </div>
        </div>
      )}

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