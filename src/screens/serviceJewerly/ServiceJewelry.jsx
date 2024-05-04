import React, { useEffect } from "react";
import "./serviceJewelry.css";
import Navbar from "../../components/navbar/Navbar";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const ServiceJewelry = () => {
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
        headText="Jewelry"
        headPara="Adorn yourself with elegance and style. Our exquisite collection of jewelry pieces is crafted to perfection, adding a touch of sophistication to every occasion."
      />

      <ServiceBitcoinComp
        bodyText="
At Latte Impulse Solutions, we believe that jewelry is more than just an accessory—it's a reflection of your unique style and personality. Our Jewelry collection is curated with meticulous attention to detail, featuring exquisite pieces crafted to perfection by skilled artisans.

Whether you're dressing up for a special occasion or adding a touch of glamour to your everyday look, our diverse range of jewelry offers something for every taste and preference. From timeless classics to contemporary designs, each piece is thoughtfully crafted using high-quality materials to ensure longevity and durability.

Our collection includes a variety of jewelry types, including rings, necklaces, earrings, bracelets, and more, all designed to complement your individual style and elevate your ensemble. Whether you prefer understated elegance or statement-making pieces, our jewelry collection offers endless possibilities to express yourself and make a lasting impression.

At Latte Impulse Solutions, we understand that jewelry holds sentimental value and often serves as a cherished keepsake for years to come. That's why we strive to offer not only exquisite designs but also exceptional quality and craftsmanship that stand the test of time.

Whether you're treating yourself or searching for the perfect gift for a loved one, explore our Jewelry collection and discover the perfect piece to adorn yourself with elegance and style."
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceJewelry;
