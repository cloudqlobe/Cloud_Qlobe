import { useState } from "react";
import SuperAdminAuthContext from "./SuperAdminAuthContext";
import { jwtDecode } from "jwt-decode";

const SuperAdminAuthProvider = ({ children }) => {
  const [superAdminDetails, setSuperAdminDetails] = useState(() => {
    const savedToken = sessionStorage.getItem("SuperAdminAuthToken");

    if (savedToken) {
      try {
        return jwtDecode(savedToken); // ✅ Decode JWT token
      } catch (error) {
        console.error("Invalid token:", error);
        return { role: "", name: "", email: "", id: "" };
      }
    }

    return { role: "", name: "", email: "", id: "" };
  });

  const updateSuperAdminDetails = (token) => {
    try {
      const decoded = jwtDecode(token);
      setSuperAdminDetails(decoded);
      sessionStorage.setItem("SuperAdminAuthToken", token); // ✅ Store raw token
    } catch (error) {
      console.error("Invalid token:", error);
    }
  };

  const clearSuperAdminDetails = () => {
    setSuperAdminDetails({ role: "", name: "", email: "", id: "" });
    sessionStorage.removeItem("SuperAdminAuthToken");
  };

  return (
    <SuperAdminAuthContext.Provider
      value={{
        superAdminDetails,
        updateSuperAdminDetails,
        clearSuperAdminDetails,
      }}
    >
      {children}
    </SuperAdminAuthContext.Provider>
  );
};

export default SuperAdminAuthProvider;
