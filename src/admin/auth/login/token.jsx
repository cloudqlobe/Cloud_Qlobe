import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AdminAuthContext from "../../../context/admin/AdminAuthContext";
import axiosInstance from "../../../utils/axiosinstance";

const AdminTokenVerification = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
const { updateAdminDetails } = useContext(AdminAuthContext);

  const handleVerify = async () => {
    const adminId = sessionStorage.getItem("pendingAdminId");
    if (!adminId) {
      toast.error("No admin session found. Please login again.");
      navigate("/superadmin/signin");
      return;
    }

    try {
      const res = await axiosInstance.post("/api/admin/verify-token", {
        token,
        adminId,
      }, { withCredentials: true });

      const { adminData } = res.data;

      sessionStorage.setItem("AdminAuthToken", JSON.stringify(adminData));
      updateAdminDetails(adminData);

      toast.success("Token verified. Welcome!");
      navigate("/superadmin/dashboard");
    } catch (err) {
      const status = err?.response?.status;
console.log(status);
console.log(err);


      if (status === 410) {
        toast.error("Token expired. Please re-login.");
      } else if (status === 401) {
        toast.error("Token is incorrect. Please try again.");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }

      sessionStorage.removeItem("pendingAdminId");
      navigate("/superadmin/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Enter Your 6-Digit Login Token
        </h2>
        <input
          type="text"
          maxLength={6}
          placeholder="******"
          className="border border-gray-300 rounded w-full px-4 py-3 text-center text-lg tracking-widest font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg font-medium"
          onClick={handleVerify}
        >
          Verify Token
        </button>
      </div>
    </div>
  );
};

export default AdminTokenVerification;
