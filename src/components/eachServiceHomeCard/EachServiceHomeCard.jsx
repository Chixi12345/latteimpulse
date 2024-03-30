import React, { useState } from "react";
import "./eachServiceHomeCard.css";
import UpdateImages from "../updateImages/UpdateImages";
import { useNavigate } from "react-router-dom";

const EachServiceHomeCard = ({
  serviceImage,
  serviceHead,
  serviceFirst,
  serviceSecond,
  serviceRoute,
}) => {
  const [showArrow, setShowArrow] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="each_service_home_card_body"
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
      onClick={() => {
        navigate(serviceRoute);
      }}
    >
      <div className="each_service_home_card_img">
        <img src={serviceImage} />
      </div>
      <div className="each_service_home_card_textBody">
        <div className="each_service_home_card_textBodyHead">{serviceHead}</div>
        <div className="each_service_home_card_textBodyPara">
          {serviceFirst}
        </div>
        <div className="each_service_home_card_textBodyPara">
          {serviceSecond}
        </div>
      </div>

      <div style={{ width: "32px" }} className="forward_btn_body">
        {showArrow && <img src={UpdateImages.forward_button} />}
      </div>
    </div>
  );
};

export default EachServiceHomeCard;
