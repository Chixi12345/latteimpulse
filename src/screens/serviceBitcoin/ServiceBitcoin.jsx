import React, { useEffect } from "react";
import "./serviceBitcoin.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServicesBuildingComp from "../../components/servicesBuildingComp/ServicesBuildingComp";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import { useLocation } from "react-router-dom";

const ServiceBitcoin = () => {
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
        headText="Bitcoin Trading  "
        headPara="Explore the world of cryptocurrency with our bitcoin trading platform. Take advantage of the latest trends and opportunities in the digital currency market."
      />

      <ServiceBitcoinComp
        bodyText="  
At Latte Impulse Solutions, we're committed to staying ahead of the curve and embracing innovative technologies that shape the future. With our bitcoin trading platform, we invite you to embark on a journey into the world of cryptocurrency – a realm of endless possibilities and lucrative opportunities.

Cryptocurrency, particularly bitcoin, has revolutionized the way we perceive and interact with traditional financial systems. It offers unparalleled flexibility, transparency, and security, making it an attractive investment option for both seasoned traders and newcomers alike.

Our bitcoin trading platform provides you with access to the latest trends, insights, and tools necessary to navigate the dynamic digital currency market effectively. Whether you're looking to buy, sell, or trade bitcoin, our platform offers a user-friendly interface and robust features designed to enhance your trading experience.

With Latte Impulse Solutions, you can harness the power of technology to diversify your investment portfolio and capitalize on emerging trends in the cryptocurrency space. Our team of experts is dedicated to providing you with the support and guidance you need to make informed decisions and maximize your returns.

Don't miss out on the opportunity to explore the potential of bitcoin trading. Join us at Latte Impulse Solutions and embark on a journey towards financial freedom and success in the digital age."
      />
      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceBitcoin;
