import React from "react";
import Header from "../compnent/Header/Header";
import Footer from "../compnent/Footer/Footer";

const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      
    </>
  );
};

export default PageContainer;
