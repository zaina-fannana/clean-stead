import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthnticated, setIsAuthnticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthnticated(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthnticated, setIsAuthnticated }}>
      {children}
    </AuthContext.Provider>
  );
}
