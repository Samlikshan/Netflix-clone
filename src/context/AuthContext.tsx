import React, { createContext, useContext, useState, ReactNode } from "react";
import { User, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.js";

// Type for AuthContext
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Create Context with default values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => { },
  logout: () => { },
});

// Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => setUser(userData);
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);
