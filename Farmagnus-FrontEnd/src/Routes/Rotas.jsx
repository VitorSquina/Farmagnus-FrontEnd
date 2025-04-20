// React
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Pages
import { TesteComponentes } from "../pages/TesteComponentes/TesteComponentes";
import { Login } from "../pages/Login/Login";
import { RecuperarSenha } from "../pages/RecuperarSenha/RecuperarSenha";
//Context
import { AuthProvider } from "../contexts/AuthProvider";
// PrivateRoute
import { PrivateRoute } from "./PrivateRoute";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/teste" element={<TesteComponentes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
