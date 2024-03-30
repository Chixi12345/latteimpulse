import React, { useState } from "react";
import "./singleProductCard.css";
import cordyceps_coffee from "../../assets/immune_booster/cordyceps_coffee.jpeg";
import ModalForm from "../modalForm/ModalForm";
import { immuneBoosterList } from "../productList/ProductList";

const SingleProductCard = ({ data }) => {
  const [showDescrip, setShowDescrip] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  const handleOpenDescrip = () => {
    setShowDescrip(true);
  };

  const handleCloseDescrip = () => {
    setShowDescrip(false);
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div>
      {/* {immuneBoosterList.map((data, index) => {
        return ( */}
      <div
        onClick={() => {
          handleOpenDescrip();
          setProductInfo(data);
        }}
        className="singleProduct_parentCard"
      >
        <div className="singleProduct_img">
          <img src={data.productImg} />
        </div>

        <div className="singleProduct_name">{data.productTitle}</div>

        <div className="singleProduct_discount">{data.productDiscount}</div>
      </div>
      {/* );
      })} */}

      {showDescrip && (
        <ModalForm
          handleCloseForm={handleCloseDescrip}
          handleChildClick={handleChildClick}
          productInfo={productInfo}
        />
      )}
    </div>
  );
};

export default SingleProductCard;
