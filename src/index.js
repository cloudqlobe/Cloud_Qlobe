import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./context/AuthProvider";
import SuperAdminAuthProvider from "./context/superAdmin/SuperAdminAuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SuperAdminAuthProvider>
        <App />
      </SuperAdminAuthProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
