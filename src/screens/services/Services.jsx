import React, { useEffect } from "react";
import "./services.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ServiceCategory from "../../components/serviceCategory/ServiceCategory";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ProductImg from "../../components/productList/ProductImg";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      {/* <Helmet>
        <title>Fenip Health & Food Care | Services</title>
      </Helmet> */}
      <Navbar />

      <a
        aria-label="Chat on WhatsApp"
        href="https://api.whatsapp.com/send?phone=+2348033477608&text=I%20am%20reaching%20out%20to%20explore%20your%20business%20offering."
        target="_blank"
        className="whatsappStickbody"
      >
        <div className="whatsappStickActive"></div>
        <img src={ProductImg.whatsApp} />
      </a>
      <ServiceCategory />

      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default Services;
