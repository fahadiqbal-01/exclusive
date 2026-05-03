import React from "react";
import Container from "../component/Container";
import BreadCrumb from "../component/BreadCrumb";
import Flex from "../component/Flex";
import { useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.allproduct.wishlist);

  return (
    <section className="pb-[140px]">
      <Container>
        <BreadCrumb />
        <Flex className="items-center justify-between mt-[42px] mb-[60px] px-2 lg:px-0">
          <h2 className="text-[20px] font-normal leading-[26px] font-poppins text-black">
            Wishlist ({wishlistData.length})
          </h2>
          <button className="text-[16px] font-medium leading-[24px] font-poppins text-black px-[48px] py-[16px] border-[1px] border-[#00000080] rounded-[4px]">
            Move All To Bag
          </button>
        </Flex>

        <Flex className="flex-wrap gap-[30px] justify-start px-2 lg:px-0">
          {wishlistData.length > 0 ? (
            wishlistData.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%]"
              >
                <ProductCard
                  ProductDetails={item}
                  id={item.id}
                  productImg={item.thumbnail}
                  discount={`-${Math.floor(item.discountPercentage)}%`}
                  newPrice={`$${Math.floor(item.price - (item.discountPercentage / 100) * item.price)}`}
                  oldPrice={`$${item.price}`}
                  productName={item.title}
                  rating={item.rating}
                  reviewcount={item.reviews?.length || 0}
                />
              </div>
            ))
          ) : (
            <div className="w-full text-center py-[100px]">
              <h3 className="text-[24px] font-poppins text-gray-400">
                Your Wishlist is empty
              </h3>
              <Link
                to="/Shop"
                className="text-orange underline mt-4 inline-block"
              >
                Return to shop
              </Link>
            </div>
          )}
        </Flex>
      </Container>
    </section>
  );
};

export default Wishlist;
