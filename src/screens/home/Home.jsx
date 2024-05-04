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
        href="https://api.whatsapp.com/send?phone=+2348033477608&text=I%20am%20reaching%20out%20to%20explore%20your%20business%20offering."
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
