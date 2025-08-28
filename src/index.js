import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./context/AuthProvider";
import SuperAdminAuthProvider from "./context/superAdmin/SuperAdminAuthProvider";
import AdminAuthProvider from "./context/admin/AdminAuthProvider";
import CustomerAuthProvider from "./context/customer/CustomerAuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SuperAdminAuthProvider>
        <AdminAuthProvider>
          <CustomerAuthProvider>
            <App />
          </CustomerAuthProvider>
        </AdminAuthProvider>
      </SuperAdminAuthProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
