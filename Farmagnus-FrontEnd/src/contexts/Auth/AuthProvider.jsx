import { useState } from 'react';
import { useUsers } from '../../Hooks/useUser/useUser';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const { users } = useUsers();
  console.log(users);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
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
