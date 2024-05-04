import React from "react";
import "./serviceCosmetics.css";
import Navbar from "../../components/navbar/Navbar";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";

const ServiceCosmetics = () => {
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
        headText="Cosmetics "
        headPara="Elevate Your Beauty Routine with Our Exquisite Cosmetics Collection! From radiant skincare essentials to dazzling makeup must-haves."
      />

      <ServiceBitcoinComp
        bodyText="Transform your beauty regimen into a luxurious experience with our exquisite cosmetics collection! Dive into a world of radiant skincare essentials meticulously crafted to nourish and rejuvenate your skin. Our lineup features premium serums, moisturizers, and masks infused with potent ingredients to deliver stunning results.

Indulge in the artistry of makeup with our dazzling must-haves designed to enhance your natural beauty. From vibrant eyeshadow palettes to silky-smooth foundations, we offer a comprehensive range of products to elevate every aspect of your look. Explore our curated selection of lipsticks, blushes, and highlighters, each formulated to perfection for effortless application and long-lasting wear.

At Latte Impulse Solutions, we're dedicated to helping you discover the power of self-expression through beauty. Whether you're a makeup enthusiast or skincare aficionado, our collection has something for everyone. Treat yourself to the ultimate beauty experience and unleash your inner glow with Latte Impulse Solutions cosmetics!"
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceCosmetics;
