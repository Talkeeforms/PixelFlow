// src/UserContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import userTest from "./userTest.json";
import userImage from "@/assets/user.webp"; // or "./assets/user.webp"

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");

    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...userTest,
        ...parsed,
        image: parsed.image || userImage,
      };
    }

    return {
      ...userTest,
      image: userImage,
    };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
