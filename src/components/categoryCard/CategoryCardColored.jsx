import React from "react";
import "./categoryCardColored.css";
import healthStore from "../../assets/images/healthStore.svg";
const CategoryCardColored = ({ cardImg, cardHeader, cardPara }) => {
  return (
    <div className="categoryCardColored_contGen">
      <div className="categoryCardColored_ImgCont">
        <img src={cardImg} />
      </div>

      <div className="categoryCardColored_textHead">{cardHeader}</div>
      <div className="categoryCardColored_textPara">{cardPara}</div>
    </div>
  );
};

export default CategoryCardColored;
