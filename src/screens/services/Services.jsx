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
        href="https://wa.me/8132841719?text= I'm%20interested%20in%20your%20health%20products%20and%20would%20like%20to%20learn%20more%20about%20what%20you%20offer🛒."
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
