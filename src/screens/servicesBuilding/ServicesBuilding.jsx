import React from "react";
import "./servicesBuilding.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductImg from "../../components/productList/ProductImg";
import UpdateImages from "../../components/updateImages/UpdateImages";
import ServicesBuildingComp from "../../components/servicesBuildingComp/ServicesBuildingComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import FirstBanner from "../../components/firstBanner/FirstBanner";

const ServicesBuilding = () => {
  return (
    <div>
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
