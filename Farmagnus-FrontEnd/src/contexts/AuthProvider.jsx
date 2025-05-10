import { createContext, useState, useContext } from "react";
import { useUsers } from "../Hooks/useUser/useUser";

const AuthContext = createContext();
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
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
