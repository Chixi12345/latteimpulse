import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { antiUlcerList } from "../../components/productList/ProductList";
import SingleProductCard from "../../components/singleProductCard/SingleProductCard";
import { useLocation } from "react-router-dom";
import ProductImg from "../../components/productList/ProductImg";

const AntiUlcer = () => {
  const [herbalPowderProd, setHerbalPowderProd] = useState([]);

  useEffect(() => {
    setHerbalPowderProd(antiUlcerList);
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Navbar />
      <div className="immuneBooster_sectionOneCont">
        <div className="immuneBooster_sectionOne_gen">
          <div className="pageHeading__">Anti Ulcer</div>

          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/8132841719?text= I'm%20interested%20in%20your%20health%20products%20and%20would%20like%20to%20learn%20more%20about%20what%20you%20offer🛒."
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

export default AntiUlcer;
