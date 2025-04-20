// React
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Pages
import { TesteComponentes } from "../pages/TesteComponentes/TesteComponentes";
import { Login } from "../pages/Login/Login";
import { EsqueceuSenha } from "../pages/EsqueceuSenha/EsqueceuSenha";
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
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
