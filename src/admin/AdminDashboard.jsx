import { useState } from "react";
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaMoneyBill, 
  FaShippingFast, 
  FaChartLine, 
  FaCog, 
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaBell,
  FaUserCircle
} from "react-icons/fa";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  // Mock data for dashboard stats
  const statsData = [
    { title: "Total Users", value: "2,456", change: "+12%", icon: <FaUsers className="text-blue-500" />, color: "bg-blue-100" },
    { title: "Total Revenue", value: "$12,456", change: "+8%", icon: <FaMoneyBill className="text-green-500" />, color: "bg-green-100" },
    { title: "Total Orders", value: "456", change: "+5%", icon: <FaShippingFast className="text-purple-500" />, color: "bg-purple-100" },
    { title: "Conversion Rate", value: "24.8%", change: "-2%", icon: <FaChartLine className="text-red-500" />, color: "bg-red-100" }
  ];

  // Recent activities data
  const recentActivities = [
    { user: "John Doe", action: "placed a new order", time: "2 minutes ago" },
    { user: "Sarah Smith", action: "updated profile information", time: "10 minutes ago" },
    { user: "Michael Johnson", action: "completed payment", time: "25 minutes ago" },
    { user: "Emily Davis", action: "registered new account", time: "1 hour ago" },
    { user: "Robert Wilson", action: "cancelled subscription", time: "2 hours ago" }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-md transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        <nav className="mt-6">
          <div 
            className={`flex items-center px-4 py-3 ${activePage === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'} cursor-pointer`}
            onClick={() => setActivePage('dashboard')}
          >
            <FaTachometerAlt className="text-lg" />
            {sidebarOpen && <span className="ml-3">Dashboard</span>}
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 ${activePage === 'users' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'} cursor-pointer`}
            onClick={() => setActivePage('users')}
          >
            <FaUsers className="text-lg" />
            {sidebarOpen && <span className="ml-3">Users</span>}
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 ${activePage === 'orders' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'} cursor-pointer`}
            onClick={() => setActivePage('orders')}
          >
            <FaShippingFast className="text-lg" />
            {sidebarOpen && <span className="ml-3">Orders</span>}
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 ${activePage === 'analytics' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'} cursor-pointer`}
            onClick={() => setActivePage('analytics')}
          >
            <FaChartLine className="text-lg" />
            {sidebarOpen && <span className="ml-3">Analytics</span>}
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 ${activePage === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'} cursor-pointer`}
            onClick={() => setActivePage('settings')}
          >
            <FaCog className="text-lg" />
            {sidebarOpen && <span className="ml-3">Settings</span>}
          </div>
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="flex items-center text-gray-600 hover:text-red-600 cursor-pointer">
            <FaSignOutAlt className="text-lg" />
            {sidebarOpen && <span className="ml-3">Logout</span>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">{activePage}</h2>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <FaBell className="text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUserCircle className="text-blue-600" />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activePage === 'dashboard' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statsData.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">{stat.title}</p>
                        <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                        <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {stat.change} from last week
                        </p>
                      </div>
                      <div className={`p-3 rounded-full ${stat.color}`}>
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts and Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart Placeholder */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Revenue chart will be displayed here</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activePage === 'users' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">User Management</h3>
              <p className="text-gray-500">User management interface will be displayed here</p>
            </div>
          )}

          {activePage === 'orders' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Order Management</h3>
              <p className="text-gray-500">Order management interface will be displayed here</p>
            </div>
          )}

          {activePage === 'analytics' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Analytics</h3>
              <p className="text-gray-500">Analytics dashboard will be displayed here</p>
            </div>
          )}

          {activePage === 'settings' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Settings</h3>
              <p className="text-gray-500">System settings will be displayed here</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;