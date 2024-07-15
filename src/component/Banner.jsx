import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import BannerCategory from "./BannerCategory";
import Images from "./Images";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
          position: "absolute",
          bottom: "11px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul style={{ margin: "0px", display: "flex", gap: "5px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          background: "gray",
          borderRadius: "50%",
        }}
      ></div>
    ),

  };

  return (
    <section>
      <Container>
        <Flex className=" flex-col xl:flex-row relative">
          <div className="w-full xl:w-[20%] pt-[20px] xl:pt-[40px] pb-[25px] xl:pb-0 border-r-0 xl:border-r-[0.5px] px-[10px] xl:px-0 ">
            <BannerCategory />
          </div>

          <div className="pt-[10px] xl:pt-[40px] xl:pl-[45px] w-full xl:w-[80%] mx-auto px-[10px] xl:px-0 ">
            <Slider {...settings}>
              <div>
                <Images
                  src="images/bannerImg.jpg"
                  alt="banner_image"
                  className="w-full"
                />
              </div>
              <div>
                <Images
                  src="images/bannerImg.jpg"
                  alt="banner_image"
                  className="w-full"
                />
              </div>
              <div>
                <Images
                  src="images/bannerImg.jpg"
                  alt="banner_image"
                  className="w-full"
                />
              </div>
              <div>
                <Images
                  src="images/bannerImg.jpg"
                  alt="banner_image"
                  className="w-full"
                />
              </div>
              <div>
                <Images
                  src="images/bannerImg.jpg"
                  alt="banner_image"
                  className="w-full"
                />
              </div>
            </Slider>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
