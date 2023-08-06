import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageContainer from "./layouts/PageContainer";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import HomePage from "./Pages/HomePage/HomePage";
import { setAccessToken } from "./axiosConfig";
import SliderPage from "./Pages/HomePage/SliderPage/SliderPage";
import Services from "./Pages/HomePage/Services/Services";
import WhyChoosUs from "./Pages/HomePage/WhyChoosUs/WhyChoosUs";
import Reviews from "./Pages/HomePage/Reviews/Reviews";


import useAuth from "./hooks/useAuth/useAuth";
import useProducts from "./hooks/useProducts/useProducts"; 

function App() {
  const { isLoggedIn } = useAuth();
  const { products } = useProducts(); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <Router>
      <PageContainer>
        <Routes>
           <Route exact path="/products" element={<SliderPage products={products} />} />
          <Route path="/Services" element={<Services />} /> 
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

export default App;
