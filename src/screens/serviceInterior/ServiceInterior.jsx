import React, { useEffect } from "react";
import "./serviceInterior.css";
import Navbar from "../../components/navbar/Navbar";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import ProductImg from "../../components/productList/ProductImg";
import { useLocation } from "react-router-dom";

const ServiceInterior = () => {
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
        headText="Interior Decoration "
        headPara="Transform your space into a work of art with our decorative accents. From home décor to event embellishments, we offer stylish solutions to elevate any environment."
      />

      <ServiceBitcoinComp
        bodyText="At Latte Impulse Solutions, we understand the importance of creating spaces that reflect your unique style and personality. Our Interior Decoration services are designed to help you transform any space into a captivating work of art, whether it's your home, office, or event venue.

With our extensive collection of decorative accents and accessories, we offer stylish solutions to enhance the aesthetic appeal of any environment. From elegant furnishings and statement pieces to chic décor accessories and artistic embellishments, we have everything you need to bring your vision to life.

Our team of skilled designers and decorators works closely with you to understand your preferences, style preferences, and budget constraints. Whether you're looking to refresh a single room or undertake a complete home or office makeover, we provide personalized design solutions tailored to your specific needs and requirements.

Our skilled team of painters is dedicated to bringing your vision to life with precision and expertise. Whether you're looking to refresh the walls of your home, office, or event venue, we offer tailored painting solutions to suit your needs. From selecting the perfect color palette to executing flawless brush strokes, we ensure every detail is carefully considered to achieve stunning results.

From concept development and space planning to sourcing materials and executing the final design, we handle every aspect of the interior decoration process with meticulous attention to detail and a keen eye for design. Our goal is to create spaces that not only look beautiful but also function seamlessly and reflect your individual taste and lifestyle.

Whether you're seeking to create a cozy and inviting atmosphere in your home, impress clients with a stylish office space, or set the perfect ambiance for a special event, Latte Impulse Solutions is your trusted partner for all your interior decoration needs. Let us help you turn your vision into reality and create spaces that inspire and delight."
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceInterior;
