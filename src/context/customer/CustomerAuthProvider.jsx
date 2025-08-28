import { useState } from "react";
import CustomerAuthContext from "./CustomerAuthContext";
import { jwtDecode } from "jwt-decode";

const CustomerAuthProvider = ({ children }) => {
  const [customerDetails, setCustomerDetails] = useState(() => {
    const savedToken = sessionStorage.getItem("authToken");

    if (savedToken) {
      try {
        const decoded = jwtDecode(savedToken);
        return {
          id: decoded.id || "",
          companyEmail: decoded.companyEmail || "",
          customerId: decoded.customerId || "",
          companyName: decoded.companyName || "",
          name: decoded.name || "",
          address: decoded.address || "",
        };
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }

    return {
      id: "",
      companyEmail: "",
      customerId: "",
      companyName: "",
      name: "",
      address: "",
    };
  });

  const updateCustomerDetails = (token) => {
    try {
      const decoded = jwtDecode(token);
      setCustomerDetails({
        id: decoded.id || "",
        companyEmail: decoded.companyEmail || "",
        customerId: decoded.customerId || "",
        companyName: decoded.companyName || "",
        name: decoded.name || "",
        address: decoded.address || "",
      });
      sessionStorage.setItem("authToken", token); // ✅ Save token
    } catch (error) {
      console.error("Invalid token:", error);
    }
  };

  const clearCustomerDetails = () => {
    setCustomerDetails({
      id: "",
      companyEmail: "",
      customerId: "",
      companyName: "",
      name: "",
      address: "",
    });
    sessionStorage.removeItem("authToken"); // ✅ Remove token
  };

  return (
    <CustomerAuthContext.Provider
      value={{ customerDetails, updateCustomerDetails, clearCustomerDetails }}
    >
      {children}
    </CustomerAuthContext.Provider>
  );
};

export default CustomerAuthProvider;
