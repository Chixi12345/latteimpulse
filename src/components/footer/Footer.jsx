import React from "react";
import "./footer.css";
import fenip_logo from "../../assets/images/fenip_logo.png";
import latte_impulse_logo_white from "../../assets/images/latte_impulse_logo_white.png";

import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaPhoneSquare,
  FaCircle,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_extWidth">
      <div className="footer_GenFlex">
        <div className="footerSecGen1">
          <div className="footerSecGen1_logo">
            <img src={latte_impulse_logo_white} alt="oplug_logo" />
          </div>
          <div className="footerSecGen1_heading">
            Discover endless possibilities with Latte Impulse Solutions – your
            trusted partner for quality products and exceptional services.
            Elevate your lifestyle, simplify your shopping experience, and
            unlock new opportunities for growth with us. Join our community
            today and experience the difference.
          </div>

          <div className="footerSecGen1_bottomLinks">
            <div className="footerSecGen1_eachbottomLink">Legal notice |</div>
            <div className="footerSecGen1_eachbottomLink">
              Privacy Policy Cookies Policy |
            </div>
            <div className="footerSecGen1_eachbottomLink">
              General Conditions Environmental Policy
            </div>
          </div>

          <div className="footerSecGen1_socialBottom">
            <div className="footerSecGenSocialIcon">
              <FaFacebookSquare />
            </div>
            <div className="footerSecGenSocialIcon">
              <FaYoutubeSquare />
            </div>
            <div className="footerSecGenSocialIcon">
              <FaLinkedin />
            </div>

            <div className="footerSecGenSocialIcon">
              <a
                href="https://www.instagram.com/feniphealthcare/"
                target="_blank"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footerSecGen2">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="footerSecGen2_option"
          >
            <div className="footerSecGen2_bullet">
              <FaCircle />
            </div>

            <div className="footerSecGen2_text">Home</div>
          </Link>

          <Link
            to="/services"
            style={{ textDecoration: "none" }}
            className="footerSecGen2_option"
          >
            <div className="footerSecGen2_bullet">
              <FaCircle />
            </div>
            <div className="footerSecGen2_text">Services</div>
          </Link>

          <Link
            to="/contact"
            style={{ textDecoration: "none" }}
            className="footerSecGen2_option"
          >
            <div className="footerSecGen2_bullet">
              <FaCircle />
            </div>
            <div className="footerSecGen2_text">Contact</div>
          </Link>

          <Link
            to="/allproducts"
            style={{ textDecoration: "none" }}
            className="footerSecGen2_option"
          >
            <div className="footerSecGen2_bullet">
              <FaCircle />
            </div>
            <div className="footerSecGen2_text">Products</div>
          </Link>
        </div>
        <div className="footerSecGen3">
          <div className="footerSecGen3_offHead">Lagos, Nigeria Office</div>
          <div className="footerSecGen3_offPara">
            8, Badiru Street, Dopemu, Lagos State.
          </div>

          <div>
            <a
              href="tel:+2348132841719"
              style={{ textDecoration: "none" }}
              className="footerSecGen3_contGen"
              target="_blank"
            >
              <div className="footerSecGen3_contIcon">
                <FaPhoneSquare />
              </div>
              <div className="footerSecGen3_contD">+234 813 284 1719</div>
            </a>
            <a
              href="https://wa.me/2348132841719/"
              target="_blank"
              className="footerSecGen3_contGen"
            >
              <div className="footerSecGen3_contIcon">
                <FaWhatsapp />
              </div>
              <div className="footerSecGen3_contD">+234 813 284 1719</div>
            </a>

            <a
              href="mailto: feniphfc@gmail.com"
              className="footerSecGen3_contGen"
              target="_blank"
            >
              <div className="footerSecGen3_contIcon">
                <FaEnvelope />
              </div>
              <div className="footerSecGen3_contD">feniphfc@gmail.com</div>
            </a>
          </div>
        </div>
      </div>

      <div className="footer_right">
        © Copyright 2023 Latte Impulse Solutions. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
