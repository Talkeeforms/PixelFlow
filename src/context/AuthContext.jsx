import { createContext, useState, useEffect } from "react";
import {
  loginApi,
  getToken,
  setToken,
  removeToken,
} from "../services/AuthService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    setTimeout(() => {
      if (token) {
        setIsAuthenticated(true);
        setAuthToken(token);
      }
      setLoading(false);
    }, 7100);
  }, []);

  const login = async (credentials) => {
    const { token } = await loginApi(credentials);
    setToken(token);
    setAuthToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeToken();
    setAuthToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
