import React from "react";
import { Routes, Route } from "react-router-dom";
import { SuperAdminRoute } from "../auth/ProtectedRoute.jsx";

// Import all superadmin components
import SuperAdminLoginForm from "../superAdmin/auth/login/page.jsx";
import SuperAdminTokenVerification from "../superAdmin/auth/login/token.jsx";
import SuperAdminResetPasswordPage from "../superAdmin/auth/restpassword/RestPassword.jsx";
import SuperAdminDashboard from "../superAdmin/Dashboard/page.js";
import MarketingDashboard from "../superAdmin/Marking/page.jsx";
import AdminPage from "../superAdmin/AdminsPage.jsx";
import CustomersPage from "../superAdmin/CustomersPage.jsx";
import AllStaffManagement from "../superAdmin/MembersPage.jsx";
import Dummy from "../superAdmin/Marking/leads.jsx";
import TechnicalSupportDashboard from "../superAdmin/TechnicalSupport/page.jsx";
import TelecomAccountsDashboard from "../superAdmin/Accounts/page.jsx";
import TelecomSalesDashboard from "../superAdmin/Sales/page.jsx";
import CarriersManagementDashboard from "../superAdmin/Carriers/page.jsx";
import SuperAdminCCRate from "../superAdmin/Accounts/Rates/CCRate/page.jsx";
import SuperAdminCLIRate from "../superAdmin/Accounts/Rates/CLIRate/page.jsx";

const SuperAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SuperAdminLoginForm />} />
      <Route path="/verify-token" element={<SuperAdminTokenVerification />} />
      <Route path="/reset-password" element={<SuperAdminResetPasswordPage />} />

      <Route path="/*" element={
        <SuperAdminRoute>
          <Routes>
            <Route path="/dashboard" element={<SuperAdminDashboard />} />
            <Route path="/admins" element={<AdminPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/members" element={<AllStaffManagement />} />
            <Route path="/analytics" element={<Dummy />} />
            <Route path="/reports" element={<Dummy />} />
            <Route path="/settings" element={<Dummy />} />

            <Route path="/marketing/dashboard" element={<MarketingDashboard />} />
            <Route path="/marketing/leads" element={<Dummy />} />
            <Route path="/marketing/queries" element={<Dummy />} />
            <Route path="/marketing/campaigns" element={<Dummy />} />
            <Route path="/marketing/analytics" element={<Dummy />} />
            <Route path="/marketing/reports" element={<Dummy />} />
            <Route path="/marketing/settings" element={<Dummy />} />

            <Route path="/sales/dashboard" element={<TelecomSalesDashboard />} />
            <Route path="/sales/leads" element={<Dummy />} />
            <Route path="/sales/plans" element={<Dummy />} />
            <Route path="/sales/customers" element={<Dummy />} />
            <Route path="/sales/analytics" element={<Dummy />} />
            <Route path="/sales/reports" element={<Dummy />} />
            <Route path="/sales/settings" element={<Dummy />} />

            <Route path="/carriers/dashboard" element={<CarriersManagementDashboard />} />
            <Route path="/carriers/manage" element={<Dummy />} />
            <Route path="/carriers/network" element={<Dummy />} />
            <Route path="/carriers/performance" element={<Dummy />} />
            <Route path="/carriers/analytics" element={<Dummy />} />
            <Route path="/carriers/reports" element={<Dummy />} />
            <Route path="/carriers/settings" element={<Dummy />} />

            <Route path="/accounts/dashboard" element={<TelecomAccountsDashboard />} />
            <Route path="/accounts/ccrate" element={<SuperAdminCCRate />} />
            <Route path="/accounts/clirate" element={<SuperAdminCLIRate />} />

            <Route path="/accounts/overview" element={<Dummy />} />
            <Route path="/accounts/revenue" element={<Dummy />} />
            <Route path="/accounts/manage" element={<Dummy />} />
            <Route path="/accounts/expenses" element={<Dummy />} />
            <Route path="/accounts/departments" element={<Dummy />} />
            <Route path="/accounts/reports" element={<Dummy />} />
            <Route path="/accounts/settings" element={<Dummy />} />

            <Route path="/supports/dashboard" element={<TechnicalSupportDashboard />} />
            <Route path="/supports/overview" element={<Dummy />} />
            <Route path="/supports/tickets" element={<Dummy />} />
            <Route path="/supports/agents" element={<Dummy />} />
            <Route path="/supports/knowledge" element={<Dummy />} />
            <Route path="/supports/analytics" element={<Dummy />} />
            <Route path="/supports/escalations" element={<Dummy />} />
            <Route path="/supports/settings" element={<Dummy />} />

          </Routes>
        </SuperAdminRoute>
      } />
    </Routes>
  );
};

export default SuperAdminRoutes;