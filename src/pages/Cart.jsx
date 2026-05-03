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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const subtotal = cartData.reduce((acc, item) => {
    const price = Math.floor(
      item.price - (item.discountPercentage / 100) * item.price,
    );
    return acc + price * (item.quantity || 1);
  }, 0);

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
          {cartData.map((item, index) => (
            <CartItem
              key={index}
              id={item.id}
              quantity={item.quantity}
              src={item.thumbnail}
              productName={item.title}
              price={Math.floor(
                item.price - (item.discountPercentage / 100) * item.price,
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
        <div className="mt-[80px] flex justify-end">
          <div className="w-[470px] border-[1.5px] border-black rounded-[4px] px-[24px] py-[32px]">
            <h2 className="text-[20px] font-medium leading-[28px] font-poppins text-black mb-[24px]">
              Cart Total
            </h2>
            <h3 className="text-[16px] font-normal leading-[24px] font-poppins text-black pb-[16px] border-b-[1px] border-[#808080] flex justify-between">
              Subtotal: <span>${subtotal}</span>
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
