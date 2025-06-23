// React
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// Pages
import { Login } from '../pages/Login/Login';
import { RecuperarSenha } from '../pages/RecuperarSenha/RecuperarSenha';
import { Home } from '../pages/Home/Home';
import { Endereco } from '../pages/Registrar/Endereco/Endereco';
import { Registrar } from '../pages/Registrar/Registrar';
//Context
import { MedicinesProvider } from '../contexts/medicines/MedicinesContext';
import { AuthProvider } from '../contexts/Auth/AuthProvider';
// PrivateRoute
import { PrivateRoute } from './PrivateRoute';
import { Pedidos } from '../pages/Pedidos/Pedidos';
import { Catalogo } from '../pages/Catalogo/Catalogo';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Historico } from '../pages/Historico/Historico';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <MedicinesProvider>
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
            <Route path="/historico" element={<PrivateRoute element={<Historico />} />} />
          </Routes>
        </AuthProvider>
      </MedicinesProvider>
    </BrowserRouter>
  );
};
