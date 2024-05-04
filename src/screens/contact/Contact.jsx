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
            href="https://api.whatsapp.com/send?phone=+2348033477608&text=I%20am%20reaching%20out%20to%20explore%20your%20business%20offering."
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
                House 3 Block B Ama Pepple Estate Isheri Lasu Road, Lagos.
              </div>
            </div>

            <div className="contact_genRightCont_">
              <div className="contact_genRightCont_Img">
                <PhoneIcon fill="#3c3d73" />
              </div>
              <div className="contact_genRightCont_ImgText">
                +234 708 110 0729
              </div>
            </div>

            <div className="contact_genRightCont_">
              <div className="contact_genRightCont_Img">
                <PhoneIcon fill="#3c3d73" />
              </div>
              <div className="contact_genRightCont_ImgText">
                +234 803 347 7604
              </div>
            </div>

            <div className="contact_genRightCont_">
              <div className="contact_genRightCont_Img">
                <EmailIcon fill="#3c3d73" />
              </div>
              <div className="contact_genRightCont_ImgText">
                latteimpulsesolutions@gmail.com
              </div>
            </div>

            <div className="contact_social_accts">
              {/* <div className="contact_social_each">
                <Youtube fill="#3c3d73" />
              </div> */}

              <a
                href="https://web.facebook.com/profile.php?id=61558437594591"
                target="_blank"
                style={{ textDecoration: "none", color: "#fff" }}
                className="contact_social_each"
              >
                <Facebook fill="#3c3d73" />
              </a>

              <a
                href="https://www.instagram.com/levit7tjc/"
                target="_blank"
                style={{ textDecoration: "none", color: "#fff" }}
                className="contact_social_each"
              >
                <Instagram fill="#3c3d73" />
              </a>
              {/* <div className="contact_social_each">
                <Twitter fill="#3c3d73" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
