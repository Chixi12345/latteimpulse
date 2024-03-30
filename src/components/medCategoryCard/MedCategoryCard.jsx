import React from "react";
import "./medCategoryCard.css";
import healthStore from "../../assets/images/healthStore.svg";
import { Link } from "react-router-dom";

const MedCategoryCard = ({ categoryName, linkName }) => {
  return (
    <Link
      to={linkName}
      style={{ textDecoration: "none" }}
      className="medCategory_genParent"
    >
      <div className="medcategoryCardColored_ImgCont">
        <img src={healthStore} />
      </div>
      <div className="medcategoryCardColored_textHead">{categoryName}</div>
      <div className="medcategoryCardColored_textPara">View Products</div>
    </Link>
  );
};

export default MedCategoryCard;
