import React from "react";
import "./serviceCategory.css";
import CategoryCard from "../categoryCard/CategoryCard";
import CategoryCardColored from "../categoryCard/CategoryCardColored";
import chatDoctor from "../../assets/images/chatDoctor.svg";
import visitHospital from "../../assets/images/visitHospital.svg";
import healthStore from "../../assets/images/healthStore.svg";
import EachServiceHomeCard from "../eachServiceHomeCard/EachServiceHomeCard";
import { servicesData } from "../generalDataList/GeneralDataList";

const ServiceCategory = () => {
  return (
    <div className="serviceCategory_sectionOneCont">
      <div className="serviceCategory_sectionOne_gen">
        <div className="serviceCategory_textHeadingd">
          Our <span className="serviceCategory_textHeadingSpan">Services </span>
          <span className="breakText">Categories</span>
        </div>

        <div className="serviceCategory_categoryFlex">
          {servicesData.map((data, index) => (
            <EachServiceHomeCard
              serviceImage={data.sectionImg}
              serviceFirst={data.sectionFirstPara}
              serviceHead={data.sectionHeading}
              serviceSecond={data.sectionSecondPara}
              serviceRoute={data.sectionRoute}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;
