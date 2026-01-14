import { Navigate } from "react-router-dom";
import LoadingAnimation from "../../components/LoadingPage";
import useAuth from "../../auth/useAuth";

const PublicOrAuthRoute = ({ children }) => {
  const guest = useAuth('guest');
  const customer = useAuth('customer');

  if (guest.isLoading || customer.isLoading) {
    return <LoadingAnimation />;
  }

  if (guest.isAuthenticated || customer.isAuthenticated) {
    return children;
  }

  return <Navigate to="/customer/login" replace />;
};

export default PublicOrAuthRoute;
