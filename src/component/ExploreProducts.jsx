import React from "react";
import Container from "./Container";
import Title from "./Title";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ProductCardTwo from "./ProductCardTwo";
import { Link } from "react-router-dom";
import Monitor from "../images/Monitor.png";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ExploreProducts = ({ product }) => {
  let productdata = product;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F5F5F5",
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          fontSize: "24px",
          position: "absolute",
          top: "-96px",
          right: "20px",
        }}
        onClick={onClick}
      >
        <IoIosArrowRoundForward />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F5F5F5",
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          fontSize: "24px",
          position: "absolute",
          top: "-96px",
          right: "76px",
        }}
        onClick={onClick}
      >
        <IoIosArrowRoundBack />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    rows: 2,
    slidesPerRow: 2,
    centerPadding: "60px",
    slidesToScroll: 2,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesToShow: 1.5,
          rows: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 2,
          rows: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className=" mb-[50px] xl:mb-[168px] ">
      <Container>
        <div className="ml-[15px] xl:ml-0 ">
          <Title subtitle="Our Products" title="Explore Our Products" />
        </div>

        <div className="slider-container mt-[60px] mb-[15px] xl:mb-[60px]  ">
          <Slider
            {...settings}
            className="flex flex-col gap-[30px] justify-center "
          >
            {productdata.map((item) => (
              <div>
                <ProductCard
                  key={item.id}
                  id={item.id}
                  productImg={item.thumbnail}
                  discount={`-${Math.floor(item.discountPercentage)}%`}
                  newPrice={`$${Math.floor(
                    item.price - (item.discountPercentage / 100) * item.price
                  )}`}
                  oldPrice={`$${item.price}`}
                  productName={item.title}
                  rating={item.rating}
                  reviewcount={item.reviews.length}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className=" flex justify-center items-center">
          <Link
            onClick={scrollToTop}
            to="/shop"
            className=" inline-block text-[16px] font-medium leading-[24px] font-poppins text-white px-[48px] py-[16px] bg-orange rounded-[4px] "
          >
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ExploreProducts;
