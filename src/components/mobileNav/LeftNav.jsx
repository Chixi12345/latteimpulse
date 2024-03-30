import React, { useState } from "react";

import "./leftNav.css";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const LeftNav = ({ open, openLogoutBtn, closeLogoutBtn, openLogoutPage }) => {
  const location = useLocation();

  const { pathname } = location;
  const navigate = useNavigate();

  const splitLocation = pathname.split("/");

  const [show, setShow] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };

  const showSecondDropdown = (e) => {
    setShowSecond(!showSecond);
  };
  const inSide = (e) => {
    setShow(true);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const greLink = () => {
    navigate("/gre_page");
    showDropdown();
  };
  const gmatLink = () => {
    navigate("/gmat_page");
    showDropdown();
  };
  const pteLink = () => {
    navigate("/pte_page");
    showDropdown();
  };
  const toeflLink = () => {
    navigate("/toefl_page");
    showDropdown();
  };
  const ieltsLink = () => {
    navigate("/ielts_page");
    showDropdown();
  };

  return (
    <>
      <div
        open={open}
        style={{
          transform: `${open ? "translateX(0)" : "translateX(100%)"}`,
          transition: "transform 0.3s ease-in-out",
        }}
        className="sidemenu-family-cont"
      >
        <div className="top-navbar-rel">
          <div className="cont-main">
            <Link
              to="/"
              className={
                splitLocation[1] === ""
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              HOME
            </Link>

            <Link
              to="/services"
              className={
                splitLocation[1] === "services"
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              SERVICES
            </Link>

            <Link
              to="/contact"
              className={
                splitLocation[1] === "contact"
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              CONTACT
            </Link>
            <Link
              to="/allproducts"
              className={
                splitLocation[1] === "allproducts"
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              PRODUCTS
            </Link>
            {/* <Link
              to="/training"
              className={
                splitLocation[1] === "training"
                  ? "leftNavbar-opt-active"
                  : "leftNavbar-opt"
              }
              style={{ textDecoration: "none" }}
            >
              TRAINING CENTER
            </Link> */}

            <div
              // to="/contact_page"
              // className={
              //   splitLocation[1] === "contact_page"
              //     ? "leftNavbar-opt-active"
              //     : "leftNavbar-opt"
              // }
              style={{ textDecoration: "none", paddingBottom: "300px" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
