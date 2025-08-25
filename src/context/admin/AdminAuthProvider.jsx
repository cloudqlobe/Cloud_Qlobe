import { useState } from "react";
import AdminAuthContext from "./AdminAuthContext";

const AdminAuthProvider = ({ children }) => {
  const [adminDetails, setAdminDetails] = useState(() => {
    const saved = sessionStorage.getItem("AdminAuthToken");
    return saved
      ? JSON.parse(saved)
      : {
          role: "",
          name: "",
          email: "",
          id: "",
        };
  });

  const updateAdminDetails = (data) => {
    setAdminDetails(data);
    sessionStorage.setItem("AdminAuthToken", JSON.stringify(data));
  };

  const clearAdminDetails = () => {
    setAdminDetails({ role: "", name: "", email: "", id: "" });
    sessionStorage.removeItem("AdminAuthToken");
  };

  return (
    <AdminAuthContext.Provider
      value={{ adminDetails, updateAdminDetails, clearAdminDetails }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
