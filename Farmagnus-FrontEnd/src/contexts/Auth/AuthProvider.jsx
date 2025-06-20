import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);


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
      alert('CNPJ ou senha inválidos. Tente novamente.' + error.message);
      console.error('Login error:', error);
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
