// React
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Pages
import { TesteComponentes } from "../pages/TesteComponentes/TesteComponentes";
import { Login } from "../pages/Login/Login";
import { RecuperarSenha } from "../pages/RecuperarSenha/RecuperarSenha";
import { Home } from "../pages/Home/Home";
import { Registrar } from "../pages/Registrar/Registrar";
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
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/" element={<Home />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />
            <Route path="/historico" element={<h1>Histórico</h1>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
