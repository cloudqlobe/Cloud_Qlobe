import { useState } from "react";
import SuperAdminAuthContext from "./SuperAdminAuthContext";

const SuperAdminAuthProvider = ({ children }) => {
  const [superAdminDetails, setSuperAdminDetails] = useState(() => {
    const saved = sessionStorage.getItem("SuperAdminAuthToken");
    return saved
      ? JSON.parse(saved)
      : {
          role: "",
          name: "",
          email: "",
          id: "",
        };
  });

  const updateSuperAdminDetails = (data) => {
    setSuperAdminDetails(data);
    sessionStorage.setItem("SuperAdminAuthToken", JSON.stringify(data));
  };

  const clearSuperAdminDetails = () => {
    setSuperAdminDetails({ role: "", name: "", email: "", id: "" });
    sessionStorage.removeItem("SuperAdminAuthToken");
  };

  return (
    <SuperAdminAuthContext.Provider
      value={{ superAdminDetails, updateSuperAdminDetails, clearSuperAdminDetails }}
    >
      {children}
    </SuperAdminAuthContext.Provider>
  );
};

export default SuperAdminAuthProvider;
