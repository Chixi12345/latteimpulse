import React, { useState } from "react";
import "./singleSpecialProductCard.css";
import cordyceps_coffee from "../../assets/immune_booster/cordyceps_coffee.jpeg";
import ModalForm from "../modalForm/ModalForm";
import { immuneBoosterList } from "../productList/ProductList";
import { Link } from "react-router-dom";

const SingleSpecialProductCard = ({ data }) => {
  const [showDescrip, setShowDescrip] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  return (
    <Link
      to={data.linkName}
      style={{ textDecoration: "none" }}
      className="singleSpecialProduct_parentCard"
    >
      <div className="singleSpecialProduct_img">
        <img src={data.productImg} />
      </div>

      <div className="singleSpecialProduct_name">{data.productTitle}</div>

      <div className="singleSpecialProduct_discount">
        {data.productDiscount}
      </div>
    </Link>
  );
};

export default SingleSpecialProductCard;
