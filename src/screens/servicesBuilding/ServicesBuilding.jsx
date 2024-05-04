import React, { useEffect } from "react";
import "./servicesBuilding.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductImg from "../../components/productList/ProductImg";
import UpdateImages from "../../components/updateImages/UpdateImages";
import ServicesBuildingComp from "../../components/servicesBuildingComp/ServicesBuildingComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import { useLocation } from "react-router-dom";

const ServicesBuilding = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
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
      <FirstBanner
        headText="Building Materials "
        headPara="Construct with confidence using our high-quality building materials. From foundation to finishing touches, we supply products that meet the highest standards of durability and reliability."
      />

      <ServicesBuildingComp />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default ServicesBuilding;
