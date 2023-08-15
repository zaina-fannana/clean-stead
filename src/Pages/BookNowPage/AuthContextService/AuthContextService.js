import React, { createContext, useContext, useState } from "react";
import Service from "../Service/Service";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {Service}
    </AuthContext.Provider>
  );
};
