// React
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Pages
import { TesteComponentes } from "../pages/TesteComponentes/TesteComponentes";
import { Login } from "../pages/Login/Login";
import { RecuperarSenha } from "../pages/RecuperarSenha/RecuperarSenha";
import { Home } from "../pages/Home/Home";
import { Endereco } from "../pages/Registrar/Endereco/Endereco";
import { Registrar } from "../pages/Registrar/Registrar";
//Context
import { AuthProvider } from "../contexts/AuthProvider";
// PrivateRoute
import { PrivateRoute } from "./PrivateRoute";
import { Pedidos } from "../pages/Pedidos/Pedidos";
import { Catalogo } from "../pages/Catalogo/Catalogo";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/teste" element={<TesteComponentes />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/registrar/endereco" element={<Endereco />} />

          <Route
            path="/pedidos"
            element={<PrivateRoute element={<Pedidos />} />}
          />
          <Route
            path="/catalogo"
            element={<PrivateRoute element={<Catalogo />} />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
