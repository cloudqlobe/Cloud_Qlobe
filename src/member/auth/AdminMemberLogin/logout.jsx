import React, { useState, useEffect, useRef, useContext } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import axiosInstance from "../../../utils/axiosinstance";

const UserDropdown = () => {
  const { memberDetails } = useContext(AuthContext)
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post('api/member/logout', {}, { withCredentials: true });
      sessionStorage.removeItem('MemberAuthToken');
      toast.success("Logged out successfully", { position: "top-right" });
      navigate('/member/signin')
    } catch (error) {
      toast.error("Logout failed. Please try again.", { position: "top-right" });
    }
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-dropdown-container relative" ref={dropdownRef}>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-white px-4 py-2 transition-colors duration-200 bg-orange-500 hover:bg-orange-600"
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <UserIcon className="w-4 h-4 text-orange-600" />
            </div>
            <span className="font-medium">Member</span>
          </button>
          {/* Dropdown Menu */}
          {isOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLogout();
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;