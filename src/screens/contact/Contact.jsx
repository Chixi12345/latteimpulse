import React, { useEffect } from "react";
import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import LocationIcon from "../../assets/images/LocationIcon.svg";
import LocationIcon from "../../assets/images/LocationIcon";
import PhoneIcon from "../../assets/images/PhoneIcon";
import EmailIcon from "../../assets/images/EmailIcon";
import Youtube from "../../assets/images/Youtube";
import Facebook from "../../assets/images/Facebook";
import Instagram from "../../assets/images/Instagram";
import Twitter from "../../assets/images/Twitter";
import { useLocation } from "react-router-dom";
import ProductImg from "../../components/productList/ProductImg";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Navbar />
      <div className="contactUs_sectionOneCont">
        <div className="contactUs_sectionOne_gen">
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/8132841719?text= I'm%20interested%20in%20your%20health%20products%20and%20would%20like%20to%20learn%20more%20about%20what%20you%20offer🛒."
            target="_blank"
            className="whatsappStickbody"
          >
            <div className="whatsappStickActive"></div>
            <img src={ProductImg.whatsApp} />
          </a>
          <div className="contact_genLeftCont">
            <form>
              <div className="contact_genLeftContHeadText">
                Contact{" "}
                <span className="contact_genLeftContHeadText_span">us </span>{" "}
              </div>
              <div className="contact_genLeftCont_input">
                <input type="text" placeholder="Name" />
              </div>
              <div className="contact_genLeftCont_input">
                <input type="text" placeholder="Email" />
              </div>
              <div className="contact_genLeftCont_textarea">
                <textarea placeholder="Message" />
              </div>

              <button className="contact_genLeftCont_BtnSub">Submit</button>
            </form>
          </div>

          <div className="contact_genRightCont">
            <div className="contact_genRightCont_">
              <div className="contact_genRightCont_Img">
                <LocationIcon fill="#3c3d73" />
              </div>
              <div className="contact_genRightCont_ImgText">
                8, Badiru Street, Dopemu, Lagos State.
              </div>
            </div>

            <div className="contact_genRightCont_">
              <div className="contact_genRightCont_Img">
                <PhoneIcon fill="#3c3d73" />
              </div>
              <div className="contact_genRightCont_ImgText">
                +234 813 284 1719
              </div>
            </div>

            <div className="contact_genRightCont_">
              <div className="contact_genRightCont_Img">
                <EmailIcon fill="#3c3d73" />
              </div>
              <div className="contact_genRightCont_ImgText">
                feniphfc@gmail.com
              </div>
            </div>

            <div className="contact_social_accts">
              <div className="contact_social_each">
                <Youtube fill="#3c3d73" />
              </div>
              <div className="contact_social_each">
                <Facebook fill="#3c3d73" />
              </div>
              <div className="contact_social_each">
                <Instagram fill="#3c3d73" />
              </div>
              <div className="contact_social_each">
                <Twitter fill="#3c3d73" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
