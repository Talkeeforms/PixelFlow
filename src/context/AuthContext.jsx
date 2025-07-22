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
    console.log(token);

    if (token) {
      setIsAuthenticated(true);
      setAuthToken(token);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const syncAuth = (event) => {
      if (event.key === "authToken") {
        const token = event.newValue;
        if (token) {
          setIsAuthenticated(true);
          setAuthToken(token);
        } else {
          setIsAuthenticated(false);
          setAuthToken(null);
        }
      }
    };

    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
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
    <AuthContext.Provider
      value={{ isAuthenticated, authToken, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
