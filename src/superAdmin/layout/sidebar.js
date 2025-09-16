import {
  Users,
  UserCheck,
  TrendingUp,
  FileText,
  Settings,
  BarChart3,
  Briefcase,
  Headphones,
  DollarSign,
  UserCog,
  Building2,
  MessageSquare,
  Send,
  Eye,
  AlertTriangle,
  Package,
  HeadphonesIcon,
  Truck,
  Network,
  CreditCard,
  Activity
} from "lucide-react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const DashboardSidebar = () => {
  const location = useLocation();

  // Sidebar Config
  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/superadmin/dashboard" },
    { id: "customers", label: "Customers", icon: Users, path: "/superadmin/customers" },
    { id: "admins", label: "Admins", icon: UserCog, path: "/superadmin/admins" },
    { id: "members", label: "Members", icon: UserCheck, path: "/superadmin/members" },

    {
      id: "marketing",
      label: "Marketing",
      icon: Briefcase,
      path: "/superadmin/marketing/dashboard",
      children: [
        { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/superadmin/marketing/dashboard" },
        { id: "leads", label: "Lead Management", icon: Users, path: "/superadmin/marketing/leads" },
        { id: "queries", label: "Customer Queries", icon: MessageSquare, path: "/superadmin/marketing/queries" },
        { id: "campaigns", label: "Campaigns", icon: Send, path: "/superadmin/marketing/campaigns" },
        { id: "analytics", label: "Analytics", icon: TrendingUp, path: "/superadmin/marketing/analytics" },
        { id: "reports", label: "Reports", icon: Eye, path: "/superadmin/marketing/reports" },
        { id: "settings", label: "Settings", icon: Settings, path: "/superadmin/marketing/settings" },
      ],
    },
    {
      id: "sales",
      label: "Sales",
      icon: DollarSign,
      path: "/superadmin/sales/dashboard",
      children: [
        { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/superadmin/sales/dashboard" },
        { id: "leads", label: "Lead Management", icon: Users, path: "/superadmin/sales/leads" },
        { id: "plans", label: "Service Plans", icon: Package, path: "/superadmin/sales/plans" },
        { id: "customers", label: "Customer Care", icon: HeadphonesIcon, path: "/superadmin/sales/customers" },
        { id: "analytics", label: "Sales Analytics", icon: TrendingUp, path: "/superadmin/sales/analytics" },
        { id: "reports", label: "Reports", icon: Eye, path: "/superadmin/sales/reports" },
        { id: "settings", label: "Settings", icon: Settings, path: "/superadmin/sales/settings" }
      ],
    },
    {
      id: "carriers",
      label: "Carriers",
      icon: Building2,
      path: "/superadmin/carriers/dashboard",
      children: [
        { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/superadmin/carriers/dashboard" },
        { id: "carriers", label: "Carrier Management", icon: Truck, path: "/superadmin/carriers/manage" },
        { id: "network", label: "Network Coverage", icon: Network, path: "/superadmin/carriers/network" },
        { id: "performance", label: "Performance", icon: TrendingUp, path: "/superadmin/carriers/performance" },
        { id: "analytics", label: "Analytics", icon: Activity, path: "/superadmin/carriers/analytics" },
        { id: "reports", label: "Reports", icon: Eye, path: "/superadmin/carriers/reports" },
        { id: "settings", label: "Settings", icon: Settings, path: "/superadmin/carriers/settings" }
      ],
    },
    {
      id: "accounts",
      label: "Accounts",
      icon: FileText,
      path: "/superadmin/accounts/dashboard",
      children: [
        { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/superadmin/accounts/dashboard" },
        { id: "overview", label: "Financial Overview", icon: BarChart3, path: "/superadmin/accounts/overview" },
        { id: "revenue", label: "Revenue Analytics", icon: TrendingUp, path: "/superadmin/accounts/revenue" },
        { id: "accounts", label: "Account Management", icon: Users, path: "/superadmin/accounts/manage" },
        { id: "expenses", label: "Expense Tracking", icon: CreditCard, path: "/superadmin/accounts/expenses" },
        { id: "departments", label: "Department P&L", icon: Building2, path: "/superadmin/accounts/departments" },
        { id: "reports", label: "Financial Reports", icon: FileText, path: "/superadmin/accounts/reports" },
        { id: "settings", label: "Settings", icon: Settings, path: "/superadmin/accounts/settings" }
      ],
    },
    {
      id: "supports",
      label: "Tech Support",
      icon: Headphones,
      path: "/superadmin/supports/dashboard",
      children: [
        { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/superadmin/supports/dashboard" },
        { id: "overview", label: "Support Overview", icon: BarChart3, path: "/superadmin/supports/overview" },
        { id: "tickets", label: "Ticket Management", icon: MessageSquare, path: "/superadmin/supports/tickets" },
        { id: "agents", label: "Agent Dashboard", icon: Users, path: "/superadmin/supports/agents" },
        { id: "analytics", label: "Performance Analytics", icon: TrendingUp, path: "/superadmin/supports/analytics" },
        { id: "knowledge", label: "Knowledge Base", icon: FileText, path: "/superadmin/supports/knowledge" },
        { id: "escalations", label: "Escalations", icon: AlertTriangle, path: "/superadmin/supports/escalations" },
        { id: "settings", label: "Settings", icon: Settings, path: "/superadmin/supports/settings" }
      ],
    },

    { id: "analytics", label: "Analytics", icon: TrendingUp, path: "/superadmin/analytics" },
    { id: "reports", label: "Reports", icon: FileText, path: "/superadmin/reports" },
    { id: "settings", label: "Settings", icon: Settings, path: "/superadmin/settings" },
  ];

  // Find active section (if inside a parent with children)
  const activeSection = sidebarItems.find(
    (item) =>
      item.children &&
      location.pathname.startsWith(item.path.replace("/dashboard", ""))
  );

  return (
    <div className="flex">
      {/* MAIN SIDEBAR */}
      <div
        className={`${activeSection ? "w-16" : "w-64"} fixed left-0 top-0 h-screen bg-slate-900 flex flex-col py-4 transition-all duration-300 z-40`}
      >
        {sidebarItems.map((item) =>
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 transition-colors ${
                isActive || activeSection?.id === item.id
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {!activeSection && <span className="ml-3">{item.label}</span>}
          </NavLink>
        )}
      </div>

      {/* SUB-SIDEBAR */}
      {activeSection && (
        <div className="fixed left-16 top-0 h-screen w-64 bg-slate-800 py-6 shadow-lg transition-all duration-300 z-30">
          <h2 className="px-6 text-sm font-semibold text-slate-400 uppercase mb-4">
            {activeSection.label}
          </h2>
          <div className="flex flex-col space-y-1">
            {activeSection.children.map((child) => (
              <NavLink
                key={child.id}
                to={child.path}
                className={({ isActive }) =>
                  `w-full flex items-center px-6 py-2 transition-colors ${
                    isActive
                      ? "bg-slate-700 text-white"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`
                }
              >
                <child.icon className="w-5 h-5 mr-3" />
                {child.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* PAGE CONTENT */}
      <div className={`${activeSection ? "ml-80" : "ml-64"} flex-1`}>
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default DashboardSidebar;
