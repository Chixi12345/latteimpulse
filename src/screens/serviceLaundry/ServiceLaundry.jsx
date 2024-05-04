import React, { useEffect } from "react";
import "./serviceLaundry.css";
import Navbar from "../../components/navbar/Navbar";
import ProductImg from "../../components/productList/ProductImg";
import FirstBanner from "../../components/firstBanner/FirstBanner";
import ServiceBitcoinComp from "../../components/serviceBitcoinComp/ServiceBitcoinComp";
import GetStartedSection from "../../components/getStartedSection/GetStartedSection";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const ServiceLaundry = () => {
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
        headText="Laundry"
        headPara="Leave your laundry woes behind with our professional laundry services. We ensure your clothes are clean, fresh, and impeccably pressed every time."
      />

      <ServiceBitcoinComp
        bodyText="

At Latte Impulse Solutions, we understand that keeping up with laundry can be a time-consuming and tedious task. That's why we offer professional laundry services to help you leave your laundry woes behind. Whether you're a busy professional, a parent juggling multiple responsibilities, or simply looking to free up more time for yourself, our laundry services are designed to make your life easier.

With our professional team and state-of-the-art equipment, we ensure that your clothes are cleaned, freshened, and impeccably pressed to perfection every time. Whether it's everyday wear, delicate fabrics, or specialty items, we handle your laundry with care and attention to detail, ensuring that your garments look and feel their best.

Our laundry process is efficient and thorough, utilizing industry-leading techniques and eco-friendly detergents to deliver exceptional results while minimizing environmental impact. From sorting and washing to drying and folding, we take care of every step of the laundry process so that you can enjoy clean and fresh clothes without the hassle.

Whether you're looking for a one-time laundry service or regular ongoing assistance, we offer flexible options to suit your needs. Say goodbye to laundry day stress and hello to clean, fresh clothes with Latte Impulse Solutions. Let us take care of your laundry needs so that you can focus on the things that matter most to you."
      />

      <GetStartedSection />

      <Footer />
    </div>
  );
};

export default ServiceLaundry;
