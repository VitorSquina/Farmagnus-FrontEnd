import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute/PriveteRoute";
export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};
