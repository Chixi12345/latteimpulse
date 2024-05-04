import React, { useEffect } from "react";
import "./servicesTomatoesFarm.css";
import Navbar from "../../components/navbar/Navbar";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const ServicesTomatoesFarm = () => {
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
        headText="Tomatoes farming"
        headPara="Cultivate success with our tomatoes farming solutions. From seeds to cultivation techniques, we provide comprehensive support for your farming endeavors."
      />

      <ServiceBitcoinComp
        bodyText="
At Latte Impulse Solutions, we offer comprehensive solutions for tomatoes farming that empower you to cultivate success in agriculture. Whether you're an experienced farmer or new to the field, our expertise and support will guide you every step of the way.

Our tomatoes farming solutions cover everything from selecting the finest seeds to implementing cutting-edge cultivation techniques. We understand the unique requirements of tomato farming, and we provide tailored guidance to help you maximize your yield and optimize your harvest.

With our extensive knowledge of soil management, irrigation systems, pest control, and crop nutrition, we ensure that your tomatoes thrive in the optimal growing conditions. We stay updated on the latest advancements in agricultural technology and practices, allowing us to offer you the most effective and sustainable farming solutions available.

In addition to technical support, we also provide assistance with logistics, marketing, and distribution, helping you get your produce to market efficiently and profitably. Our goal is to empower farmers to achieve success and prosperity in the tomatoes farming industry.

Whether you're a small-scale farmer looking to increase your yield or a large-scale operation seeking to streamline your production process, Latte Impulse Solutions is your trusted partner for tomatoes farming success. With our expertise, resources, and dedication to excellence, we'll help you cultivate a thriving and profitable tomato harvest year after year."
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServicesTomatoesFarm;
