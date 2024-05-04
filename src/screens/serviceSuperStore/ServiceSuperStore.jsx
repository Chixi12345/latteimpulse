import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const ServiceSuperStore = () => {
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
        headText="Superstore"
        headPara="Experience convenience like never before at our superstore. With a vast selection of products under one roof, shopping has never been easier."
      />

      <ServiceBitcoinComp
        bodyText="
At Latte Impulse Solutions, our Superstore offers an unparalleled shopping experience, designed to cater to all your needs under one roof. Step into our expansive space and immerse yourself in a world of convenience and variety, where every visit promises to be a delightful journey of discovery.

Our Superstore boasts a vast selection of products spanning a wide range of categories, ensuring that you'll find everything you need and more. From everyday essentials to specialty items, our shelves are stocked with quality products sourced from trusted brands and suppliers.

Whether you're shopping for groceries, household items, electronics, fashion apparel, or home decor, our Superstore has it all. Say goodbye to the hassle of visiting multiple stores to fulfill your shopping list – at Latte Impulse Solutions, everything you need is conveniently located under one roof.

But our commitment to convenience doesn't end there. Our Superstore is thoughtfully designed to enhance your shopping experience, with spacious aisles, clear signage, and helpful staff ready to assist you every step of the way. Whether you're browsing, exploring new products, or seeking expert advice, our team is dedicated to ensuring that your visit is nothing short of exceptional.

Experience the ultimate in shopping convenience and variety at Latte Impulse Solutions Superstore. Discover the joy of one-stop shopping and make every visit a memorable and enjoyable experience.
"
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceSuperStore;
