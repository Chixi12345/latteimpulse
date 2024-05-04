import React, { useEffect } from "react";
import "./serviceLogistics.css";
import Navbar from "../../components/navbar/Navbar";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const ServiceLogistics = () => {
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
        headText="Logistics"
        headPara="Streamline your supply chain with our reliable logistics solutions. We provide efficient transportation and warehousing services to meet your business needs."
      />

      <ServiceBitcoinComp
        bodyText="
At Latte Impulse Solutions, we understand the critical role that logistics plays in the success of any business. That's why we offer comprehensive logistics solutions designed to streamline your supply chain and enhance operational efficiency. Whether you're a small business or a large corporation, our reliable logistics services are tailored to meet your unique needs and requirements.

Our logistics solutions encompass a wide range of services, including transportation, warehousing, inventory management, and distribution. We leverage our extensive network of carriers and partners to ensure that your goods are transported quickly, safely, and cost-effectively to their destination. From local deliveries to international shipments, we handle it all with precision and care.

With our state-of-the-art warehousing facilities, you can trust us to store and manage your inventory with the utmost professionalism. Our warehouses are equipped with advanced technology and security measures to ensure the safety and security of your goods at all times. Whether you need short-term storage or long-term warehousing solutions, we've got you covered.

At Latte Impulse Solutions, we pride ourselves on our commitment to reliability, efficiency, and customer satisfaction. Our team of logistics experts works tirelessly to optimize your supply chain, reduce costs, and improve delivery times. With our seamless logistics solutions, you can focus on growing your business while we take care of the rest.

Partner with Latte Impulse Solutions for all your logistics needs and experience the difference that our expertise and dedication can make to your business. Let us help you streamline your operations, improve productivity, and drive success in today's competitive marketplace."
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceLogistics;
