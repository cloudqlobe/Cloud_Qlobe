// useAuth.js
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axiosInstance from "../utils/axiosinstance";

const useAuth = (role = 'user') => {

  const [authState, setAuthState] = useState({
    isAuthenticated: null,
    isLoading: true,
    userRole: null
  });

const checkAuth = async () => {
  try {
    const response = await axiosInstance.get(`/auth/${role}/auth/check`, { withCredentials: true });

    if (response.data.success) {
      const { token, tokenName } = response.data;
console.log(token);

      if (token && tokenName) {
        const existingToken = sessionStorage.getItem(tokenName);

        if (!existingToken) {
          // ✅ If token is not present, store it and reload
          sessionStorage.setItem(tokenName, token);
          window.location.reload(); // ✅ Reload page after storing token
        }
      }

      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        userRole: role
      });
    } else {
      setAuthState({ isAuthenticated: false, isLoading: false, userRole: null });
    }
  } catch (error) {
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      userRole: null
    });

    if (error.response?.status !== 401) {
      toast.error(error.response?.data?.message || "Authentication error");
    }
  }
};


  useEffect(() => {
    checkAuth();
  }, [role]);

  return authState;
};

export default useAuth;