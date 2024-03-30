import React from "react";
import "./buttonComp.css";
import { Link } from "react-router-dom";

const ButtonComp = ({ categoryName, linkName }) => {
  return (
    <Link
      to={linkName}
      style={{ textDecoration: "none" }}
      className="button_comp_fam"
    >
      {categoryName}
    </Link>
  );
};

export default ButtonComp;
