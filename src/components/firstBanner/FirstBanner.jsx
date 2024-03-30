import React, { useEffect } from "react";
import "./firstBanner.css";
import banner from "../../assets/images/banner.jpeg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";

const squareVariantsY = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

const squareVariantsX = {
  visible: { opacity: 1, y: 0, transition: { duration: 3 } },
  hidden: { opacity: 0, y: 100 },
};

const FirstBanner = ({ headText, headTextSpan, headPara, headBtnText }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const passSearchData = () => {
    // localStorage.setItem("Search_Data", searchInput);
    navigate("/all_product");
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      style={{
        background: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        width: "100%",
        marginTop: "20px",
      }}
      className="banner_fMobile"
    >
      <div className="firstbannerCoverB">
        <div className="firstBanner-maxGen">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariantsY}
          >
            <div className="firstBanner-maxGenF">
              {headText}
              <span> {headTextSpan}</span>{" "}
            </div>
            <div className="firstBanner-maxGenSS">{headPara}</div>
          </motion.div>
          <div className="firstBanner_searchGen">
            {/* <div className="firstBanner_searchInput">
                <input
                  type="search"
                  placeholder="Search here..."
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    console.log("Search Input Value", searchInput);
                  }}
                />
              </div> */}
            {/* <div className="firstBanner_selectGen">
                <select>
                  <option>1</option>
                </select>
              </div>
              <div className="firstBanner_selectGen">
                <select>
                  <option>1</option>
                </select>
              </div> */}
          </div>
          {headBtnText && (
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={squareVariantsX}
            >
              <div className="firstBanner_searchBtn" onClick={passSearchData}>
                {headBtnText}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
