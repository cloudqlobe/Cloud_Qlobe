import React from "react";
import { Routes, Route } from "react-router-dom";
import { SuperAdminRoute } from "../auth/ProtectedRoute.jsx";

// Import all superadmin components
import SuperAdminLoginForm from "../superAdmin/auth/login/page.jsx";
import SuperAdminTokenVerification from "../superAdmin/auth/login/token.jsx";
import SuperAdminResetPasswordPage from "../superAdmin/auth/restpassword/RestPassword.jsx";
import SuperAdminDashboard from "../superAdmin/SuperAdminDashboard.jsx";

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
            {/* Add other superadmin routes here if needed */}
          </Routes>
        </SuperAdminRoute>
      } />
    </Routes>
  );
};

export default SuperAdminRoutes;