// useAuth.js
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosinstance";

const useAuth = (role) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isLoading: true,
    userRole: null,
  });

  const checkAuth = async () => {
    try {
      const res = await axiosInstance.get(
        `/auth/${role}/auth/check`,
        { withCredentials: true }
      );

      if (res.data?.success) {
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          userRole: role,
        });
      } else {
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          userRole: null,
        });
      }
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
      });

      // ❌ Don't toast for unauthorized (expected case)
      if (error.response?.status !== 401) {
        toast.error(
          error.response?.data?.message || "Authentication error"
        );
      }
    }
  };

useEffect(() => {
  if (!role) {
    // guest → no backend auth check
    setAuthState({
      isAuthenticated: true,
      isLoading: false,
      userRole: "guest",
    });
    return;
  }

  checkAuth();
}, [role]);


  return authState;
};

export default useAuth;
