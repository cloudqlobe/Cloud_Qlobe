import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AdminAuthContext from "../../../context/admin/AdminAuthContext";
import axiosInstance from "../../../utils/axiosinstance";

const AdminTokenVerification = () => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { updateAdminDetails } = useContext(AdminAuthContext);

  const handleVerify = async () => {
    const adminId = sessionStorage.getItem("pendingAdminId");

    if (!adminId) {
      toast.error("⚠️ No admin session found. Please login again.", { autoClose: 3000 });
      navigate("/admin/signin");
      return;
    }

    if (!token || token.length !== 6) {
      toast.warning("Please enter a valid 6-digit token.", { autoClose: 2500 });
      return;
    }

    try {
      setLoading(true);
      const res = await axiosInstance.post(
        "/api/admin/verify-token",
        { token, adminId },
        { withCredentials: true }
      );

      const { adminData } = res.data;

      if (adminData) {
        sessionStorage.setItem("AdminAuthToken", JSON.stringify(adminData));
        sessionStorage.removeItem("pendingAdminId");
        updateAdminDetails(adminData);

        toast.success("✅ Token verified successfully!", { autoClose: 2500 });
        setTimeout(() => navigate("/admin/dashboard"), 1200);
      } else {
        toast.error("Invalid server response. Please try again.", { autoClose: 3000 });
      }
    } catch (err) {
      const status = err?.response?.status;
      console.error("Token verify error:", err?.response);

      if (status === 410) {
        toast.error("⏰ Token expired. Please login again.", { autoClose: 3000 });
        setTimeout(() => navigate("/admin/signin"), 1500);
      } else if (status === 401) {
        toast.error("❌ Incorrect token. Please try again.", { autoClose: 3000 });
      } else {
        toast.error("⚙️ Something went wrong. Please try again later.", { autoClose: 3000 });
      }
    } finally {
      setLoading(false);
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
          placeholder="••••••"
          className="border border-gray-300 rounded w-full px-4 py-3 text-center text-lg tracking-widest font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          value={token}
          onChange={(e) => setToken(e.target.value.replace(/\D/g, ""))}
          disabled={loading}
        />

        <button
          className={`w-full py-3 rounded text-lg font-medium transition ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify Token"}
        </button>
      </div>
    </div>
  );
};

export default AdminTokenVerification;
