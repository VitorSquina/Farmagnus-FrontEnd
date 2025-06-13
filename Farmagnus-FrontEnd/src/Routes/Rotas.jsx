// React
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// Pages
import { Login } from '../pages/Login/Login';
import { RecuperarSenha } from '../pages/RecuperarSenha/RecuperarSenha';
import { Home } from '../pages/Home/Home';
import { Endereco } from '../pages/Registrar/Endereco/Endereco';
import { Registrar } from '../pages/Registrar/Registrar';
import { Pedidos } from '../pages/Pedidos/Pedidos';
import { Catalogo } from '../pages/Catalogo/Catalogo';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Horarios } from '../pages/Horarios/Horarios';
//Context
import { AuthProvider } from '../contexts/Auth/AuthProvider';
// PrivateRoute
import { PrivateRoute } from './PrivateRoute';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/registrar/endereco" element={<Endereco />} />

          <Route path="/pedidos" element={<PrivateRoute element={<Pedidos />} />} />
          <Route path="/catalogo" element={<PrivateRoute element={<Catalogo />} />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/horarios" element={<PrivateRoute element={<Horarios />} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
