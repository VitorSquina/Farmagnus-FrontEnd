import { useAuth } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component }) => {
  const { isAuthenticated, login, logout } = useAuth();

  return isAuthenticated ? Component : <Navigate to="/login" replace />;
};

export default PrivateRoute;
