import React from "react";
import "./getStartedSection.css";
import { useNavigate } from "react-router-dom";

const GetStartedSection = () => {
  const navigate = useNavigate();

  const handleGetsStarted = () => {
    navigate("/allproducts");
  };
  return (
    <div className="getStarted_sectionOneCont">
      <div className="getStarted_sectionOne_gen">
        <div className="get_startedHeader">
          Get <span className="get_startedSub">Started with us</span>
        </div>
        <div className="getStarted_para">
          At Latte Impulse Solutions, we offer a diverse range of products and
          services tailored to meet your needs. With a commitment to excellence
          and customer satisfaction, we strive to be your one-stop solution for
          all your requirements. Explore our wide array of offerings across
          various sectors:
        </div>

        <div onClick={handleGetsStarted} className="getStarted_btn">
          Lets Get Started
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
