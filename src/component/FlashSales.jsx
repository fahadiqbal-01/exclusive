import React from "react";
import Container from "./Container";
import Title from "./Title";
import SalesCountDown from "./SalesCountDown";
import Flex from "./Flex";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const FlashSales = ({ products }) => {

  let productData = products

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
          top: "-76px",
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
          top: "-76px",
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
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="mt-[70px] xl:mt-[150px] pb-[80px] xl:pb-[140px]">
      <Container>
        <Flex className="xl:gap-[87px] gap-0 xl:flex-row flex-col items-center ">
          <div className=" mr-auto xl:mr-0 pl-[15px] xl:pl-0">
            <Title subtitle="Today’s" title="Flash Sales" />
          </div>

          <SalesCountDown />
        </Flex>
        <div className="slider-container mt-[40px] xl:mt-[60px]">
          <Slider {...settings}>
            {productData &&
              productData.map((items) => (
                <div>
                  <ProductCard
                    id={items.id}
                    productImg={items.thumbnail}
                    discount={`-${Math.floor(items.discountPercentage)}%`}
                    newPrice={`$${Math.floor(
                      items.price - (items.discountPercentage / 100) * items.price
                    )}`}
                    oldPrice={`$${items.price}`}
                    productName={items.title}
                    rating={items.rating}
                    reviewcount={items.reviews.length}
                  />
                </div>
              ))}
          </Slider>
        </div>
        <div className=" flex items-center justify-center mt-[35px] xl:mt-[60px] after:content-[''] after:w-full after:h-[0.5px] after:bg-gray-300 after:absolute after:bottom-[-25px] xl:after:bottom-[-60px] after:left-0 relative ">
          <Link
            onClick={scrollToTop}
            to="/shop"
            className="text-white text-[16px] font-medium leading-[24px] font-poppins px-[50px] xl:px-[78px] py-[10px] xl:py-[16px] bg-orange rounded-[4px] "
          >
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FlashSales;
