import { Navigate, useLoaderData, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { getUser: user } = useLoaderData();

  if (user?.role === "admin") {
    return children;
  } else {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
};

export default AdminRoute;
