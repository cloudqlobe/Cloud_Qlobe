import { useState, useEffect, useMemo, useContext } from "react";
import Layout from "../../layout/page";
import { useNavigate, Link } from "react-router-dom";
import {
  FunnelIcon,
  ChartBarIcon,
  UsersIcon,
  ArrowLeftStartOnRectangleIcon,
  StopCircleIcon,
} from "@heroicons/react/24/outline";
import axiosInstance from "../../../utils/axiosinstance";
import AdminAuthContext from "../../../context/admin/AdminAuthContext";

const AdminSaleCustomersPage = () => {
  const { adminDetails } = useContext(AdminAuthContext);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [leadStatusFilter, setLeadStatusFilter] = useState("");

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`api/customers`);
        const data = response.data.customer;

        // ✅ Filter by customerType instead of leadType
        const filteredCustomers = data?.filter(
          (customer) => customer.leadType === "Customer"
        );
        setCustomers(filteredCustomers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };

    if (adminDetails?.id) {
      fetchCustomers();
    }
  }, [adminDetails?.id]);

  const handleSearch = (event) => setSearch(event.target.value);
  const handleFilter = (status) => setLeadStatusFilter(status);
  const handleRowClick = (customerId) =>
    navigate(`/admin/SaleLead/customer/${customerId}`);

  // 🔍 Filtered + searched data
  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const matchesStatus =
        leadStatusFilter === "" ||
        customer.leadStatus?.toLowerCase() === leadStatusFilter.toLowerCase();

      const matchesSearch =
        customer.companyName?.toLowerCase().includes(search.toLowerCase()) ||
        (Array.isArray(JSON.parse(customer.switchIps || "[]")) &&
          JSON.parse(customer.switchIps).some((ipObj) =>
            ipObj.ip.toLowerCase().includes(search.toLowerCase())
          ));

      return matchesStatus && matchesSearch;
    });
  }, [customers, search, leadStatusFilter]);

  // 🔢 Pagination
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const leadStatuses = ["New", "Hot", "Junk", "Active", "Inactive", "Dead", "Spam"];

  return (
    <div>
      <Layout>
        {/* Navbar */}
        <div className="flex items-center px-6 py-4 mb-8">
          <div className="bg-orange-500 p-3 flex items-center justify-center rounded">
            <ChartBarIcon className="text-white w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold text-gray-800 ml-2">
            CUSTOMER MANAGEMENT
          </h1>
        </div>

        {/* Search Bar + Filter */}
        <div className="relative flex items-center mt-6 px-6 space-x-4 mb-10">
          <button className="flex items-center bg-green-500 text-white px-4 py-2 hover:bg-green-600 text-sm">
            <UsersIcon className="w-5 h-5 mr-2" />
            <Link to="/admin/sale/customer/addlead">
              <span className="text-sm">ADD CUSTOMER</span>
            </Link>
          </button>

          <div className="flex items-center bg-white border border-red-500 rounded-lg px-4 py-2 max-w-lg w-full">
            <ArrowLeftStartOnRectangleIcon className="w-6 h-6 text-blue-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-gray-700 focus:outline-none ml-2 w-full"
              value={search}
              onChange={handleSearch}
            />
          </div>

          <button className="flex items-center bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 text-sm">
            <StopCircleIcon className="w-5 h-5 mr-2" />
            <span className="text-sm">SEARCH</span>
          </button>

          <div className="flex-grow"></div>

          {/* Filter dropdown */}
          <div className="relative">
            <div
              className="flex items-center bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-300 shadow-sm w-48 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-sm">{leadStatusFilter || "All"}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 ml-auto text-gray-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-12 left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg w-48 z-10">
                <ul className="divide-y divide-gray-200">
                  <li>
                    <button
                      onClick={() => {
                        handleFilter("");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      All
                    </button>
                  </li>
                  {leadStatuses.map((status) => (
                    <li key={status}>
                      <button
                        onClick={() => {
                          handleFilter(status);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {status}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-lg mt-6">
          {loading ? (
            <p className="text-center text-gray-500 py-4">Loading...</p>
          ) : (
            <table
              className="table-auto text-left w-[97vw] ml-[22px]"
            >
              <thead>
                <tr className="bg-yellow-500 text-white">
                  <th className="py-3 px-4">Company Name</th>
                  <th className="py-3 px-4">Contact Person</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Country</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCustomers.length > 0 ? (
                  paginatedCustomers.map((customer) => (
                    <tr
                      key={customer.id}
                      onClick={() => handleRowClick(customer.id)}
                      className="border-b hover:bg-gray-100 cursor-pointer"
                    >
                      <td className="py-3 px-4">{customer.companyName}</td>
                      <td className="py-3 px-4">{customer.contactPerson}</td>
                      <td className="py-3 px-4">{customer.userEmail}</td>
                      <td className="py-3 px-4">{customer.country}</td>
                      <td className="py-3 px-4">{customer.leadStatus}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-500 py-4">
                      No results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 mb-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default AdminSaleCustomersPage;
