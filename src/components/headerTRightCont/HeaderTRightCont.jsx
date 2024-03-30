import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

import "./headerTRightCont.css";

const HeaderTRightCont = ({ icon, iconText, href }) => {
  return (
    <a
      href={href}
      style={{ textDecoration: "none" }}
      target="_blank"
      className="header_rightGen"
    >
      <div className="header_rightGen_icon">{icon}</div>
      <div className="header_rightGenDetail">{iconText}</div>
    </a>
  );
};

export default HeaderTRightCont;
