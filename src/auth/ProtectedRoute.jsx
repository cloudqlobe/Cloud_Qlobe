// AuthRoutes.jsx
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import LoadingAnimation from "../components/LoadingPage";

export const CustomerRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth('customer');

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen"><LoadingAnimation/></div>;
  }

  return isAuthenticated ? children : <Navigate to="/customer/login" replace />;
};

export const MemberRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth('member');

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen"><LoadingAnimation/></div>;
  }

  return isAuthenticated ? children : <Navigate to="/member/signin" replace />;
};

export const AdminRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth('admin');

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen"><LoadingAnimation/></div>;
  }

  return isAuthenticated ? children : <Navigate to="/admin/signin" replace />;
};

export const SuperAdminRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth('superAdmin');

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen"><LoadingAnimation/></div>;
  }

  return isAuthenticated ? children : <Navigate to="/superAdmin/signin" replace />;
};

