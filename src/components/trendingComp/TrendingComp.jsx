import React, { useState, useEffect } from "react";
import "./trendingComp.css";
import StubbornDiseases from "../../screens/stubbornDiseases/StubbornDiseases";
import SingleProductCard from "../singleProductCard/SingleProductCard";
import { sexualWellnessTrendList } from "../productList/ProductList";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleSpecialProductCard from "../singleSpecialProductCard/SingleSpecialProductCard";

const TrendingComp = () => {
  const [herbalPowderProd, setHerbalPowderProd] = useState([]);

  useEffect(() => {
    setHerbalPowderProd(sexualWellnessTrendList);
  }, []);
  return (
    <div className="trendingComp_sectionOneCont">
      <div className="trendingComp_sectionOne_gen">
        <div className="trending_header__">Trending Products</div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          autoPlay={true}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {herbalPowderProd.map((data, index) => {
            return <SingleSpecialProductCard data={data} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingComp;
