import { useAuth } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

//Este componente protege as rotas, verificando se o usuário está autenticado antes de renderizar o componente desejado.
// Se o usuário não estiver autenticado, ele será redirecionado para a página de login.
export const PrivateRoute = ({ element: Component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? Component : <Navigate to="/login" replace />;
};
