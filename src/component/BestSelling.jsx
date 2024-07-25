import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const BestSelling = ({ products }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
    <section className=" mb-[80px] xl:mb-[140px]">
      <Container>
        <Flex className=" items-center xl:items-end justify-between ml-[15px] xl:ml-0">
          <Title subtitle="This Month" title="Best Selling Products" />
          <Link
            onClick={scrollToTop}
            to="/shop"
            className=" text-[16px] font-medium leading-[24px] font-poppins text-white bg-orange px-[48px] py-[16px] rounded-[4px] hidden xl:block "
          >
            View All
          </Link>
        </Flex>

        <div className=" items-center justify-between mt-[20px] xl:mt-[60px] flex-col gap-10 xl:gap-0 xl:flex-row ">
          <div className="slider-container">
            <Slider {...settings}>
              {products &&
              products.map((items) => (
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
        </div>
      </Container>
    </section>
  );
};

export default BestSelling;
