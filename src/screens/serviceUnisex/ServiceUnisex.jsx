import React, { useEffect } from "react";
import "./serviceUnisex.css";
import Navbar from "../../components/navbar/Navbar";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ProductImg from "../../components/productList/ProductImg";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const ServiceUnisex = () => {
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
        headText="Unisex Salon"
        headPara=" Pamper yourself and indulge in luxury at our unisex salon. Our expert stylists offer a wide range of services, from haircuts to spa treatments, tailored to your individual preferences."
      />

      <ServiceBitcoinComp
        bodyText="
At Latte Impulse Solutions, our Unisex Salon is your haven for indulgence and relaxation. Step into our serene oasis and experience a world of luxury where pampering knows no bounds. Our expert stylists are dedicated to providing you with a personalized experience that exceeds your expectations.

Whether you're looking for a stylish haircut, a rejuvenating spa treatment, or a complete makeover, our salon offers a comprehensive range of services to cater to your every need. Our team of skilled professionals stays up-to-date with the latest trends and techniques to ensure that you receive the highest quality of service.

From the moment you enter our salon, you'll be greeted by a warm and inviting atmosphere designed to make you feel comfortable and at ease. Sit back, relax, and let our experienced stylists work their magic as they transform your look and rejuvenate your senses.

At Latte Impulse Solutions, we believe that everyone deserves to feel confident and beautiful, which is why we strive to create a welcoming environment where individuals of all genders and backgrounds can come together to enjoy the benefits of self-care. Whether you're preparing for a special occasion or simply treating yourself to some well-deserved pampering, our Unisex Salon is the perfect destination for all your beauty needs."
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceUnisex;
