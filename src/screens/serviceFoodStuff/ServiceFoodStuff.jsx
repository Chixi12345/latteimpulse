import React, { useEffect } from "react";
import "./serviceFoodStuff.css";
import Navbar from "../../components/navbar/Navbar";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const ServiceFoodStuff = () => {
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
        headText="Food Stuffs "
        headPara="Delight your taste buds with our diverse selection of food products. From pantry staples to gourmet delights, we source the finest ingredients for your culinary adventures."
      />

      <ServiceBitcoinComp
        bodyText="At Latte Impulse Solutions, we take pride in offering a wide array of food products to cater to your culinary needs and preferences. Our Food Stuffs category is curated to provide you with the finest and freshest ingredients, ensuring that every meal is a delightful and satisfying experience.

Whether you're looking for pantry staples to stock up your kitchen or seeking gourmet delights to elevate your cooking, we have everything you need to create delicious and memorable dishes. From grains, pulses, and spices to specialty ingredients and artisanal treats, our selection is carefully chosen to meet the highest standards of quality and taste.

We understand that food is not just nourishment but also a source of joy and comfort. That's why we go the extra mile to source our products from trusted suppliers and producers, ensuring that you receive only the best. Whether you're a seasoned chef or a home cook looking to experiment in the kitchen, our diverse range of food products offers something for everyone.

At Latte Impulse Solutions, we believe that good food brings people together and enriches our lives in countless ways. That's why we're committed to providing you with premium-quality food products that inspire creativity, ignite passion, and delight your taste buds with every bite. Explore our Food Stuffs selection today and embark on a culinary journey like no other."
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceFoodStuff;
