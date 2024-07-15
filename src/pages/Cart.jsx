import React from "react";
import Container from "../component/Container";
import BreadCrumb from "../component/BreadCrumb";
import Flex from "../component/Flex";
import { useSelector } from "react-redux";
import CartItem from "../component/CartItem";
import { Link } from "react-router-dom";
import Shop from "./Shop";

const Cart = () => {
  let cartData = useSelector((state) => state.allproduct.cart);
  console.log(cartData);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  let totalCart = cartData;

  console.log(cartData);

  return (
    <section className=" pb-[500px] ">
      <Container>
        <BreadCrumb />
        <div>
          <Flex className=" items-center justify-between xl:px-[40px] lg:px-[20px] md:px-[10px] sm:px-2 px-1 py-[24px] reounded-[4px] drop-shadow-md shadow-md">
            <h2 className=" text-[16px] font-normal leading-[24px] text-black font-poppins ">
              Product
            </h2>
            <h2 className=" text-[16px] font-normal leading-[24px] text-black font-poppins ">
              Price
            </h2>
            <h2 className=" text-[16px] font-normal leading-[24px] text-black font-poppins ">
              Quantity
            </h2>
            <h2 className=" text-[16px] font-normal leading-[24px] text-black font-poppins ">
              Subtotal
            </h2>
          </Flex>
          {cartData.map((item) => (
            <CartItem
              key={item.id}
              totalCart={totalCart}
              src={item.thumbnail}
              productName={item.title}
              price={Math.floor(
                item.price - (item.discountPercentage / 100) * item.price
              )}
            />
          ))}
          <div className=" mt-[24px] flex items-center justify-between px-2 xl:px-0 ">
            <button className=" text-[16px] font-poppins font-medium leading-[24px] text-black px-[25px] sm:px-[48px] md:px-[48px] lg:px-[48px] xl:px-[48px] py-[16px] border-[1px] border-border rounded-[4px] ">
              <Link onClick={scrollToTop} to="/shop">
                Return To Shop
              </Link>
            </button>
            <button className=" text-[16px] font-poppins font-medium leading-[24px] text-black px-[25px] sm:px-[48px] md:px-[48px] lg:px-[48px] xl:px-[48px] py-[16px] border-[1px] border-border rounded-[4px] ">
              Update Cart
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
