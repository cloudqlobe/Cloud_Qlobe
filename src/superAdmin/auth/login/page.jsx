import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import axiosInstance from "../../../utils/axiosinstance";

const SuperAdminLoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "muhammedshanu12345678910@gmail.com",
    password: "Aa123456@",
    selectDepartment: "superAdmin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.selectDepartment) {
      return toast.error("Please fill in all fields");
    }

    try {
      const response = await axiosInstance.post("api/superAdmin/login", formData, {
        withCredentials: true,
      });

      const adminData = response.data.adminId;
      sessionStorage.setItem("pendingSuperAdminId", adminData);
      toast.success("Token sent to your email. Please verify.");
      navigate("/superadmin/verify-token");

      setFormData({
        username: "",
        password: "",
        selectDepartment: "superAdmin",
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("This Customer Not Found!");
        } else if (error.response.status === 401) {
          toast.error("Incorrect Password 🔐");
        } else if (error.response.status === 403) {
          toast.error("Unauthorized Department Access 🚫");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }
    }
  };

  const handleForgotPassword = async () => {
    if (!forgotPasswordEmail) {
      return toast.error("Please enter your email address");
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post("api/superAdmin/forgot-password", {
        email: forgotPasswordEmail,
      });
      // sessionStorage.setItem("forgotSuperAdminAuthToken",response?.data.forgotPasswordToken)
      toast.success("Password reset instructions sent to your email");
      setShowForgotPasswordModal(false);
      setForgotPasswordEmail("");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("No account found with this email");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 relative"
        autoComplete="off"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Main Admin Login</h2>
          <p className="text-sm text-gray-500 mt-1">Access your admin dashboard</p>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Username</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>
          
          <button
            type="button"
            onClick={() => setShowForgotPasswordModal(true)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium shadow transition duration-200"
        >
          Sign in
        </button>
      </form>

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => {
                setShowForgotPasswordModal(false);
                setForgotPasswordEmail("");
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h3>
            <p className="text-sm text-gray-600 mb-6">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
            
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              onClick={handleForgotPassword}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium shadow transition duration-200 disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Reset Instructions"}
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default SuperAdminLoginForm;