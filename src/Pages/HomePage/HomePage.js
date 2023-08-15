import React from "react";
import SliderPage from "./SliderPage/SliderPage";
import Servise from "./Services/Services";
import WhyChoosUs from "./WhyChoosUs/WhyChoosUs";
import Reviews from "./Reviews/Reviews";
import ContactUs from "./ContactUs/ContactUs";


const HomePage = () => {
  return (
    <>
      <SliderPage />
      <Servise />
      <WhyChoosUs />
      <Reviews />
      <ContactUs />
    </>
  );
};
export default HomePage;
