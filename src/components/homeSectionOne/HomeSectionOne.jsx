import React from "react";
import "./homeSectionOne.css";
import landing_img from "../../assets/images/landing_img.png";
import ButtonComp from "../buttonComp/ButtonComp";
import { categoryList } from "../productList/ProductList";
import ProductImg from "../productList/ProductImg";

const HomeSectionOne = ({ searchBtnHome }) => {
  return (
    <div className="home_sectionOneCont">
      <div className="home_sectionOne_gen">
        <div className="homeSection_leftCont">
          <div className="homeSection_leftCont_textHead">
            We Are Ready to{" "}
            <span className="homeSection_leftCont_textHeadSpanC">
              Help Your Health
            </span>{" "}
            <span className="homeSection_leftCont_textHeadSpanD">Problems</span>
          </div>
          <div className="homeSection_leftCont_textPara_">
            As the top Natural Supplements and herbs Distributor, we offer
            top-notch natural health products, swiftly delivered to your
            doorstep at manufacturer-direct prices.
          </div>

          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/8132841719?text= I'm%20interested%20in%20your%20health%20consultation%20services"
            target="_blank"
            className="homeSection_leftCont_btnC"
          >
            Try Free Consultation
          </a>
          <div className="homeSection_leftContGen_stats">
            <div className="homeSection_leftContGen_each">
              <div className="homeSection_leftCont_statsR">
                2017<span className="homeSection_leftCont_statsPlus"></span>
              </div>
              <div className="homeSection_leftCont_statsActee">Founded</div>
            </div>

            <div className="homeSection_leftContGen_each">
              <div className="homeSection_leftCont_statsR">
                15K<span className="homeSection_leftCont_statsPlus">+</span>
              </div>
              <div className="homeSection_leftCont_statsActee">
                Customer <span className="breakText"> Served</span>
              </div>
            </div>

            <div className="homeSection_leftContGen_each">
              <div className="homeSection_leftCont_statsR">
                50K<span className="homeSection_leftCont_statsPlus">+</span>
              </div>
              <div className="homeSection_leftCont_statsActee">
                Orders <span className="breakText"> Fulfilled</span>
              </div>
            </div>
          </div>
        </div>

        <div className="homeSection_rightCont">
          <div onClick={searchBtnHome} className="homeSection_searchFam">
            <div className="homeSection_searchtext">Search Health Store...</div>
            <div className="homeSection_searchIcon">
              <img src={ProductImg.searchIcon} />
            </div>
          </div>
          <div className="home_product_categoryPar">Product Category</div>
          <div className="homeSection_right_contflex">
            {categoryList.map((data, index) => {
              return (
                <ButtonComp
                  categoryName={data.productTitle}
                  linkName={data.productLink}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionOne;
