import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./context/AuthProvider";
import SuperAdminAuthProvider from "./context/superAdmin/SuperAdminAuthProvider";
import AdminAuthProvider from "./context/admin/AdminAuthProvider";
import CustomerAuthProvider from "./context/customer/CustomerAuthProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { LoaderProvider } from "./context/LoaderContext/page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <LoaderProvider>
    <AuthProvider>
      <SuperAdminAuthProvider>
        <AdminAuthProvider>
          <CustomerAuthProvider>
            <LanguageProvider>
              <App />
            </LanguageProvider>
          </CustomerAuthProvider>
        </AdminAuthProvider>
      </SuperAdminAuthProvider>
    </AuthProvider>
    </LoaderProvider>
  </React.StrictMode>
);

reportWebVitals();

window.addEventListener("load", () => {
  const loader = document.getElementById("initial-loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.3s ease";
    setTimeout(() => loader.remove(), 300);
  }
});
