import { createContext, useState, useEffect, useContext } from "react";
import { fetchUserProfile } from "../services/UserService";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const { isAuthenticated, authToken } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated && authToken) {
      fetchUserProfile(authToken).then(setUser);
    } else {
      setUser(null);
    }
  }, [isAuthenticated, authToken]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
