import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import {
  FaPhoneAlt,
  FaChevronDown,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

// import oplugLogo from "../../assets/images/oplugLogo.png";
import fenip_logo from "../../assets/images/fenip_logo.png";

import HeaderTRightCont from "../headerTRightCont/HeaderTRightCont";

import { useOnHoverOutside } from "../useOnHoverOutside'/useOnHoverOutside";
// import Menu from "../onHoverMenu/OnHoverMenu";
// import SecondMenu from "../onHoverMenuSecond/OnHoverMenuSecond";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import Burger from "../mobileNav/Burger";
import latte_impulse_logoo from "../../assets/images/latte_impulse_logoo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation();
  const navigate = useNavigate();

  const navigateContact = () => {
    navigate("/contact");
  };

  const navigateServices = () => {
    navigate("/services");
  };

  const navigateAllProduct = () => {
    navigate("/allproducts");
  };
  const { pathname } = location;

  const splitLocation = pathname.split("/");

  const controlNavbar = () => {
    if (window.scrollY > 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };
  const openHoverMenu = () => {
    setMenuDropDownOpen(true);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div>
      {screenWidth < 992 ? (
        <div className="mobilenavbar-optMenuFam">
          <Link
            to="/"
            className="mobilenavbar-optMenulogo"
            style={{ textDecoration: "none" }}
          >
            <img src={latte_impulse_logoo} />
          </Link>
          <div>
            <Burger />
          </div>
        </div>
      ) : (
        <div>
          <div className="headerFirstTopBorder"></div>
          <div className="headerSecondJust">
            <div className="headerSecondJustMax">
              <div className="headerTopFlex">
                {/* <HeaderTRightCont
                  href="tel:+2349076351112"
                  icon={<FaPhoneAlt />}
                  iconText="+234 803 347 7604"
                /> */}
                <div className="borderRight"></div>
                <div className="discount_textColor">
                  Enjoy up to 50% Discount{" "}
                </div>
                <div className="discount_btn_find">Find out more</div>
                {/* <HeaderTRightCont
                  href="https://wa.me/2349076351112/"
                  icon={<FaWhatsapp />}
                  iconText="+234 803 347 7604"
                /> */}
                <div className="borderRight"></div>
                {/* <HeaderTRightCont
                  href="mailto: info@o-plug.com"
                  icon={<FaEnvelope />}
                  iconText="info@o-plug.com"
                /> */}
              </div>
              <div className="headerTopRight_textCont">
                {/* <Link
                  style={{ textDecoration: "none" }}
                  to="/lubritec"
                  className="headerTopRight_text"
                >
                  OPlug
                </Link> */}
                {/* <Link
                  style={{ textDecoration: "none" }}
                  to="/brands"
                  className="headerTopRight_text"
                >
                  Brands
                </Link> */}
                {/* <Link
                  style={{ textDecoration: "none" }}
                  to="/presents"
                  className="headerTopRight_text"
                >
                  Present
                </Link> */}
                {/* <Link
                  style={{ textDecoration: "none" }}
                  to="/downloads"
                  className="headerTopRight_text"
                >
                  Downloads
                </Link> */}
                {/* <Link
                  style={{ textDecoration: "none" }}
                  to="/directory"
                  className="headerTopRight_text"
                >
                  Directory
                </Link> */}
              </div>
            </div>
          </div>
          <div
            className={
              show ? "mainHeaderOpt_GenMaxScroll" : "mainHeaderOpt_GenMax"
            }
            // className="mainHeaderOpt_GenMax"
          >
            <div
              className={show ? "mainHeaderOpt_GenScroll" : "mainHeaderOpt_Gen"}
              // className="mainHeaderOpt_Gen"
            >
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="mainHeader_logo"
              >
                <img src={latte_impulse_logoo} alt="oplug_logo" />
              </Link>
              <div className="mainHeader_rightFlex">
                <Link
                  style={{ textDecoration: "none" }}
                  className={
                    splitLocation[1] === ""
                      ? "mainHeader_rightOptionActive"
                      : "mainHeader_rightOption"
                  }
                  to="/"
                >
                  Home
                </Link>
                {/* <div className="general_dropDown">
                  <div className="mainHeader_rightOptSub">
                    <div className="mainheader_optSubs">Manufacturer</div>
                    <div className="mainheader_optSubsIcon">
                      <FaChevronDown />
                    </div>
                  </div>
                
                </div> */}
                <Link
                  style={{ textDecoration: "none" }}
                  to="/services"
                  className={
                    splitLocation[1] === "services"
                      ? "mainHeader_rightOptionActive"
                      : "mainHeader_rightOption"
                  }
                >
                  Services
                </Link>

                {/* <div className="general_dropDown">
                  <div className="mainHeader_rightOptSub">
                    <div className="mainheader_optSubs">More Product</div>
                    <div className="mainheader_optSubsIcon">
                      <FaChevronDown />
                    </div>
                  </div>
                  <div className="subMenu_header">
                    <SecondMenu />
                  </div>
                </div> */}
                {/* <Link
                  style={{ textDecoration: "none" }}
                  className={
                    splitLocation[1] === "sectors"
                      ? "mainHeader_rightOptionActive"
                      : "mainHeader_rightOption"
                  }
                  to="/sectors"
                >
                  Sectors
                </Link> */}
                {/* <Link
                  style={{ textDecoration: "none" }}
                  className={
                    splitLocation[1] === "success_stories"
                      ? "mainHeader_rightOptionActive"
                      : "mainHeader_rightOption"
                  }
                  to="/success_stories"
                >
                  About Us
                </Link> */}
                <Link
                  style={{ textDecoration: "none" }}
                  className={
                    splitLocation[1] === "contact"
                      ? "mainHeader_rightOptionActive"
                      : "mainHeader_rightOption"
                  }
                  to="/contact"
                >
                  Contact
                </Link>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=+2348033477608&text=I%20am%20reaching%20out%20to%20explore%20your%20business%20offering."
                target="_blank"
                className="products_famGen"
                style={{ textDecoration: "none" }}
              >
                Get Started
              </a>
            </div>
            {/* {isMenuDropDownOpen && ( */}
            <div
              // ref={dropdownRef}

              className="subMenu_header"
            >
              {/* <Menu closeHoverMenu={closeHoverMenu} openHoverMenu={openHoverMenu} /> */}
            </div>
            {/* )} */}
            {/* <Menu /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
