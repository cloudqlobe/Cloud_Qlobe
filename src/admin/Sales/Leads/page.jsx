import React, { useState, useEffect, useMemo, useContext } from "react";
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

const AdminLeadsPage = () => {
  const { adminDetails } = useContext(AdminAuthContext);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [leadStatusFilter, setLeadStatusFilter] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`api/customers`);
        const data = response.data.customer;

        const filteredLeads = data?.filter(
          (lead) => lead.leadType === "Customer lead"
        );
        setLeads(filteredLeads);
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    };

    if (adminDetails?.id) {
      fetchLeads();
    }
  }, [adminDetails?.id]);

  const handleSearch = (event) => setSearch(event.target.value);
  const handleFilter = (status) => setLeadStatusFilter(status);
  const handleRowClick = (leadId) => navigate(`/admin/SaleLead/${leadId}`);

  // Filter leads based on search and lead status
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesStatus =
        leadStatusFilter === "" ||
        lead.leadStatus?.toLowerCase() === leadStatusFilter.toLowerCase();

      const matchesSearch =
        lead.companyName?.toLowerCase().includes(search.toLowerCase()) ||
        (Array.isArray(JSON.parse(lead.switchIps)) &&
          JSON.parse(lead.switchIps).some((ipObj) =>
            ipObj.ip.toLowerCase().includes(search.toLowerCase())
          ));

      return matchesStatus && matchesSearch;
    });
  }, [leads, search, leadStatusFilter]);

  const leadStatuses = ["New", "Hot", "Junk", "Active", "Inactive", "Dead", "Spam"];

  return (
    <div>
      <Layout>
        {/* Header Section */}
        <div className="flex items-center px-6 py-4 mb-10">
          <div className="bg-orange-500 p-3 flex items-center justify-center">
            <ChartBarIcon className="text-white w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold text-gray-800 ml-2">
            LEAD MANAGEMENT
          </h1>
        </div>

        {/* Toolbar Section */}
        <div className="relative flex items-center mt-6 px-6 space-x-4 mb-10">
          {/* Add Lead Button */}
          <button className="flex items-center bg-green-500 text-white px-4 py-2 hover:bg-green-600 text-sm">
            <UsersIcon className="w-5 h-5 mr-2" />
            <Link to="/admin/sale/addlead">
              <span className="text-sm">ADD LEAD</span>
            </Link>
          </button>

          {/* Search Input */}
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

          {/* Search Button */}
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 text-sm">
            <StopCircleIcon className="w-5 h-5 mr-2" />
            <span className="text-sm">SEARCH</span>
          </button>

          <div className="flex-grow"></div>

          {/* Filter Dropdown */}
          <div className="flex items-center space-x-4">
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
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

            {/* Filter Button */}
            <button className="flex items-center bg-green-500 text-white px-4 py-2 hover:bg-green-600 text-sm">
              <FunnelIcon className="w-5 h-5 mr-2" />
              <span className="text-sm">FILTER</span>
            </button>
          </div>
        </div>

        {/* Leads Table */}
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
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr
                      key={lead._id}
                      onClick={() => handleRowClick(lead.id)}
                      className="border-b hover:bg-gray-100 cursor-pointer"
                    >
                      <td className="py-3 px-4">{lead.companyName}</td>
                      <td className="py-3 px-4">{lead.contactPerson}</td>
                      <td className="py-3 px-4">{lead.userEmail}</td>
                      <td className="py-3 px-4">{lead.country}</td>
                      <td className="py-3 px-4">{lead.leadStatus}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-500 py-4">
                      No leads found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default AdminLeadsPage;
