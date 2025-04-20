// React
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Components
import PrivateRoute from "./PrivateRoute";

// Pages
import { TesteComponentes } from "../pages/TesteComponentes/TesteComponentes";
import { Login } from "../pages/Login/Login";
import { AuthProvider } from "../contexts/AuthProvider";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/teste" element={<TesteComponentes />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/teste2"
            element={<PrivateRoute element={<TesteComponentes />} />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
