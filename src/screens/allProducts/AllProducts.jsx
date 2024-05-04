import React, { useEffect } from "react";
import "./allProducts.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MedCategoryCard from "../../components/medCategoryCard/MedCategoryCard";
import { categoryList } from "../../components/productList/ProductList";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import ProductImg from "../../components/productList/ProductImg";

const AllProducts = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className="allProducts_sectionOneCont">
        <div className="allProducts_sectionOne_gen">
          <a
            aria-label="Chat on WhatsApp"
            href="https://api.whatsapp.com/send?phone=+2348033477608&text=I%20am%20reaching%20out%20to%20explore%20your%20business%20offering."
            target="_blank"
            className="whatsappStickbody"
          >
            <div className="whatsappStickActive"></div>
            <img src={ProductImg.whatsApp} />
          </a>
          {categoryList.map((data, index) => {
            return (
              <MedCategoryCard
                categoryName={data.productTitle}
                linkName={data.productLink}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
