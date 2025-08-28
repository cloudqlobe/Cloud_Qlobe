import { useState } from "react";
import AdminAuthContext from "./AdminAuthContext";
import { jwtDecode } from "jwt-decode";

const AdminAuthProvider = ({ children }) => {
  const [adminDetails, setAdminDetails] = useState(() => {
    const savedToken = sessionStorage.getItem("AdminAuthToken");

    if (savedToken) {
      try {
        return jwtDecode(savedToken); // ✅ Decode the token to get details
      } catch (error) {
        console.error("Invalid token", error);
        return { role: "", name: "", email: "", id: "" };
      }
    }

    return { role: "", name: "", email: "", id: "" };
  });

  const updateAdminDetails = (token) => {
    try {
      const decoded = jwtDecode(token);
      setAdminDetails(decoded);
      sessionStorage.setItem("AdminAuthToken", token); // ✅ Store raw token
    } catch (error) {
      console.error("Invalid token", error);
    }
  };

  const clearAdminDetails = () => {
    setAdminDetails({ role: "", name: "", email: "", id: "" });
    sessionStorage.removeItem("AdminAuthToken");
  };

  return (
    <AdminAuthContext.Provider value={{ adminDetails, updateAdminDetails, clearAdminDetails }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
