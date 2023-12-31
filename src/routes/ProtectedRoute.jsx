import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/useAuthContext";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const { currentUser, isAuthLoading } = useAuthContext();

  if (isAuthLoading || currentUser) {
    return children;
  } else {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
