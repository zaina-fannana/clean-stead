import React, { createContext, useContext, useState } from "react";

const ServiceContext = createContext();

export const useServiceContext = () => useContext(ServiceContext);

export const ServiceProvider = ({ children }) => {
  const [serviceStates, setServiceStates] = useState({});

  const updateCounter = (serviceId, value) => {
    setServiceStates((prevStates) => ({
      ...prevStates,
      [serviceId]: value,
    }));
  };

  return (
    <ServiceContext.Provider value={{ serviceStates, updateCounter }}>
      {children}
    </ServiceContext.Provider>
  );
};
