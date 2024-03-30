import React, { useEffect } from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HomeSectionOne from "../../components/homeSectionOne/HomeSectionOne";
import ServiceCategory from "../../components/serviceCategory/ServiceCategory";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import { useLocation, useNavigate } from "react-router-dom";
import ProductImg from "../../components/productList/ProductImg";
import SpecialComp from "../../components/specialComp/SpecialComp";
import ModalForm from "../../components/modalForm/ModalForm";
import TrendingComp from "../../components/trendingComp/TrendingComp";
import FirstBanner from "../../components/firstBanner/FirstBanner";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchBtnHome = () => {
    // localStorage.setItem("Search_Data", searchInput);
    navigate("/search_product");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
        headBtnText="Explore our services"
        headText=" Elevate Your  "
        headTextSpan="Lifestyle"
        headPara="Your One-Stop General Merchandise Destination!"
      />

      <ServiceCategory />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default Home;
