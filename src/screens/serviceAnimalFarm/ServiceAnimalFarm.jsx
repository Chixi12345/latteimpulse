import React from "react";
import "./serviceAnimalFarm.css";
import Navbar from "../../components/navbar/Navbar";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";

const ServiceAnimalFarm = () => {
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
        headText="Animal Farming "
        headPara="Discover the Finest Livestock Selection for Your Farm-to-Table Needs! From premium beef and succulent lamb to tender poultry and fresh eggs."
      />

      <ServiceBitcoinComp bodyText="Explore a diverse range of high-quality livestock for all your farm-to-table needs! From tender beef cattle to flavorful free-range chickens, we offer a variety of premium animals raised with care and expertise. Discover our selection of healthy pigs, goats, and sheep, each bred and nurtured to deliver exceptional taste and nutrition. With our commitment to sustainable farming practices and animal welfare, you can trust that every purchase supports ethical and responsible agriculture. Choose from our assortment of livestock and experience farm-fresh goodness straight from our pastures to your plate!" />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceAnimalFarm;
