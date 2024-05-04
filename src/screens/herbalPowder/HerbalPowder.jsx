import React, { useState, useEffect } from "react";
import "./herbalPowder.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { herbalPowderList } from "../../components/productList/ProductList";
import SingleProductCard from "../../components/singleProductCard/SingleProductCard";
import { useLocation } from "react-router-dom";
import ProductImg from "../../components/productList/ProductImg";

const HerbalPowder = () => {
  const [herbalPowderProd, setHerbalPowderProd] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setHerbalPowderProd(herbalPowderList);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="immuneBooster_sectionOneCont">
        <div className="immuneBooster_sectionOne_gen">
          <div className="pageHeading__">Herbal Powder</div>
          <a
            aria-label="Chat on WhatsApp"
            href="https://api.whatsapp.com/send?phone=+2348033477608&text=I%20am%20reaching%20out%20to%20explore%20your%20business%20offering."
            target="_blank"
            className="whatsappStickbody"
          >
            <div className="whatsappStickActive"></div>
            <img src={ProductImg.whatsApp} />
          </a>
          {herbalPowderProd.map((data, index) => {
            return <SingleProductCard data={data} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HerbalPowder;
