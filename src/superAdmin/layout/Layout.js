// src/layout/Layout.js
import Header from "./DashboardHeader";
import DashboardSidebar from "./sidebar";


const Layout = ({ children }) => {

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-67 bg-slate-800 shadow-lg">
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
