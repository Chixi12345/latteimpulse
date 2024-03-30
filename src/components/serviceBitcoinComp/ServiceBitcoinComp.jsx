import React from "react";
import "./serviceBitcoinComp.css";

const ServiceBitcoinComp = ({ bodyText }) => {
  return (
    <div className="serviceCategory_sectionOneCont">
      <div className="serviceCategory_sectionOne_gen">
        <div className="services_catergoryEach_mainPara">{bodyText}</div>
      </div>
    </div>
  );
};

export default ServiceBitcoinComp;
