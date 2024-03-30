import React from "react";
import "./categoryCard.css";
import chatDoctor from "../../assets/images/chatDoctor.svg";

const CategoryCard = ({ cardImg, cardHeader, cardPara }) => {
  return (
    <div className="categoryCard_contGen">
      <div className="categoryCard_ImgCont">
        <img src={cardImg} />
      </div>

      <div className="categoryCard_textHead">{cardHeader}</div>
      <div className="categoryCard_textPara">{cardPara}</div>
    </div>
  );
};

export default CategoryCard;
