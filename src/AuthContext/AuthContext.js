import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({
  isAuthnticated: false,
  setIsAuthnticated: () => {},
});

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

export function useAuthContext() {
  return useContext(AuthContext);
}
