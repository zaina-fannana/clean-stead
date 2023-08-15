import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageContainer from "./layouts/PageContainer";
import { setAccessToken } from "./axiosConfig";
import Services from "./Pages/HomePage/Services/Services";
import WhyChoosUs from "./Pages/HomePage/WhyChoosUs/WhyChoosUs";
import Reviews from "./Pages/HomePage/Reviews/Reviews";
import { useAuthContext } from "./AuthContext/AuthContext";
import { HomePage, AboutUsPage, SliderPage } from "./Pages";
import ContactUs from "./Pages/HomePage/ContactUs/ContactUs";
import useProducts from "./hooks/useProducts/useProducts";

function App() {
  const { isAuthnticated } = useAuthContext();
  const { products } = useProducts();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <>
      <Router>
        <PageContainer>
          <Routes>
            <Route
              exact
              path="/products"
              element={<SliderPage products={products} />}
            />
            <Route path="/Services" element={<Services />} />
            <Route path="/AboutUsPage" element={<AboutUsPage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </PageContainer>
      </Router>
    </>
  );
}

export default App;
