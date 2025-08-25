// customer/Components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"; // adjust path if different

const ProtectedRoute = ({ role, children }) => {
  const { isAuthenticated, isLoading, userRole } = useAuth(role);

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated || userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
