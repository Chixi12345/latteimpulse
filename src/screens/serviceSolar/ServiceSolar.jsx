import React, { useEffect } from "react";
import "./serviceSolar.css";
import Navbar from "../../components/navbar/Navbar";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const ServiceSolar = () => {
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
        headText="Solar and Inverter Solutions"
        headPara="Harness the power of renewable energy with our solar and inverter solutions. We provide sustainable energy solutions to meet your residential and commercial needs."
      />

      <ServiceBitcoinComp
        bodyText="
At Latte Impulse Solutions, we're dedicated to harnessing the power of renewable energy through our comprehensive Solar and Inverter Solutions. With a focus on sustainability and innovation, we offer cutting-edge technology to meet the energy needs of both residential and commercial properties.

Our Solar and Inverter Solutions provide a reliable and eco-friendly alternative to traditional energy sources, allowing our customers to reduce their carbon footprint while enjoying cost savings and energy independence. Whether you're looking to power your home, office, or industrial facility, we have customized solutions tailored to your specific requirements.

With our team of experienced professionals and industry-leading technology partners, we design and install solar energy systems that maximize efficiency and performance. From solar panels and inverters to battery storage and monitoring solutions, we offer a comprehensive range of products and services to ensure seamless integration and optimal energy production.

In addition to installation, we provide ongoing maintenance and support to ensure the long-term reliability and performance of your solar energy system. Our commitment to customer satisfaction means that you can trust us to deliver exceptional service and support every step of the way.

By choosing Latte Impulse Solutions for your solar and inverter needs, you're not only investing in a sustainable future but also empowering yourself with clean, renewable energy that benefits both the environment and your bottom line. Experience the power of solar with Latte Impulse Solutions and join us in building a brighter, greener future for generations to come."
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceSolar;
