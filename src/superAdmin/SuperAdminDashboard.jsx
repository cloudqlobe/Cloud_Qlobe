import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminAuthContext from "../context/superAdmin/SuperAdminAuthContext";
import axiosInstance from "../utils/axiosinstance";
import CustomersPage from "./CustomersPage";
import AllStaffManagement from "./MembersPage";
import SettingsPage from "./AdminsPage";

const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  const { clearSuperAdminDetails } = useContext(SuperAdminAuthContext);

  const [activeTab, setActiveTab] = useState("dashboard");
  const [dashboardData, setDashboardData] = useState({
    customers: [],
    admins: [],
    members: [],
    stats: {
      totalCustomers: 0,
      totalAdmins: 0,
      totalMembers: 0,
      totalLeads: 0,
      activeCustomers: 0,
      inactiveCustomers: 0
    },
    loading: true
  });


  const handleLogout = async () => {
    try {
      await axiosInstance.post('api/superAdmin/logout', {}, { withCredentials: true });
      clearSuperAdminDetails();
      navigate("/superAdmin/signin");
    } catch (error) {
      console.error("Logout failed. Please try again.", { position: "top-right" });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-600">
          Super Admin
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`block w-full text-left px-4 py-2 rounded-lg ${activeTab === "dashboard" ? "bg-blue-600" : "hover:bg-blue-600"
                  }`}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("customers")}
                className={`block w-full text-left px-4 py-2 rounded-lg ${activeTab === "customers" ? "bg-blue-600" : "hover:bg-blue-600"
                  }`}
              >
                Customers
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("admins")}
                className={`block w-full text-left px-4 py-2 rounded-lg ${activeTab === "admins" ? "bg-blue-600" : "hover:bg-blue-600"
                  }`}
              >
                Admins
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("members")}
                className={`block w-full text-left px-4 py-2 rounded-lg ${activeTab === "members" ? "bg-blue-600" : "hover:bg-blue-600"
                  }`}
              >
                Members
              </button>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 m-4 rounded-lg"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeTab === "dashboard" && (
          <DashboardView stats={dashboardData.stats} />
        )}

        {activeTab === "customers" && (
          <CustomersPage customersData={dashboardData.customers} />
        )}

        {activeTab === "admins" && (
          <SettingsPage admins={dashboardData.admins} />
        )}

        {activeTab === "members" && (
          <AllStaffManagement members={dashboardData.members} />
        )}
      </main>
    </div>
  );
};

// Dashboard View Component
const DashboardView = ({ stats }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Total Customers</h2>
          <p className="text-3xl font-bold text-blue-600">{stats.totalCustomers}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Active Customers</h2>
          <p className="text-3xl font-bold text-green-600">{stats.activeCustomers}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Leads</h2>
          <p className="text-3xl font-bold text-orange-600">{stats.totalLeads}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Total Admins</h2>
          <p className="text-3xl font-bold text-purple-600">{stats.totalAdmins}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Total Members</h2>
          <p className="text-3xl font-bold text-indigo-600">{stats.totalMembers}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Inactive Customers</h2>
          <p className="text-3xl font-bold text-red-600">{stats.inactiveCustomers}</p>
        </div>
      </div>

      {/* Recent Activity or Charts can be added here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Quick Overview</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Customer Conversion Rate</span>
              <span className="font-semibold text-green-600">
                {stats.totalCustomers > 0 ? ((stats.activeCustomers / stats.totalCustomers) * 100).toFixed(1) : 0}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Team Size</span>
              <span className="font-semibold text-blue-600">
                {stats.totalAdmins + stats.totalMembers} people
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">System Status</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">All systems operational</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">Database connected</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">API services running</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable DataTable Component (for admins and members)
const DataTable = ({ title, data }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2">{item.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;