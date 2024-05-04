import React, { useEffect } from "react";
import "./serviceFashion.css";
import Navbar from "../../components/navbar/Navbar";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import ProductImg from "../../components/productList/ProductImg";
import { useLocation } from "react-router-dom";

const ServiceFashion = () => {
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
        headText="Fashion  "
        headPara="Make a statement with our trendy fashion items. Whether you're looking for everyday wear or special occasion outfits, our fashion collection has something for everyone."
      />

      <ServiceBitcoinComp
        bodyText="  
At Latte Impulse Solutions, we understand that fashion is not just about clothing; it's a statement, an expression of individuality, and a reflection of personal style. That's why we're proud to offer a diverse range of trendy fashion items that cater to every taste and occasion.

Our fashion collection is curated with the latest trends and styles, ensuring that you'll always find something that resonates with your unique sense of style. Whether you're in search of chic everyday wear, sophisticated formal attire, or eye-catching pieces for special occasions, we've got you covered.

From timeless classics to bold statement pieces, our fashion selection spans a wide range of styles, colors, and sizes to accommodate diverse preferences and body types. Whether you prefer timeless elegance, modern sophistication, or eclectic bohemian vibes, our collection has something to suit every taste and personality.

At Latte Impulse Solutions, we believe that fashion should be inclusive, empowering, and accessible to all. That's why we're committed to offering high-quality, affordable fashion items that make you look and feel your best, no matter the occasion. Explore our fashion collection today and discover the perfect pieces to elevate your wardrobe and express your unique style."
      />
      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceFashion;
