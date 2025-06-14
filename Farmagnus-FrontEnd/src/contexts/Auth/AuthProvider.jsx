import { useState } from 'react';
import { useUsers } from '../../Hooks/useUser/useUser';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthProvider = ({ children }) => {
  const { users } = useUsers();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const res = await axios.post('http://localhost:8080/auth/login', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate('/dashboard');
      console.log('Login successful:', res.data);
      setUser(res.data);
    } catch (error) {
      alert('CNPJ ou senha inválidos. Tente novamente.');
    } finally {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
