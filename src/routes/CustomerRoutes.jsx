import React from "react";
import { Routes, Route } from "react-router-dom";
import { CustomerRoute } from "../auth/ProtectedRoute.jsx";

import Signup from "../customer/auth/signup/page.jsx";
import LoginPage from "../customer/auth/login/page.jsx";
import VerifyTokenPage from "../customer/auth/Token/page.jsx";
import ResetPasswordPage from "../customer/auth/login/ResetPasswordPage.jsx";
import ForgotPasswordPage from "../customer/auth/login/ForgotPasswordPage.jsx";

import Dashboard from "../customer/page.jsx";
import PaymentsPage from "../customer/payment/page.jsx";
import ProfilePage from "../customer/profile/page.jsx";
import Support from "../customer/support/page.jsx";
import AddTroubleTicket from "../customer/support/Addfollowup/page.jsx";
import MyRatesPage from "../customer/myRate/page.jsx";
import SettingsPage from "../customer/settings/page.jsx";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify-token" element={<VerifyTokenPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route path="/*" element={
          <CustomerRoute>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/payment" element={<PaymentsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/my-rates" element={<MyRatesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/support" element={<Support />} />
              <Route path="/add-ticket" element={<AddTroubleTicket />} />
            </Routes>
          </CustomerRoute>
        }
        />
    </Routes>
  );
};

export default CustomerRoutes;