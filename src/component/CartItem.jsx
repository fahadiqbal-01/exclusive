import { Flex } from "antd";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeCartReducer,
  updateQuantityReducer,
} from "../Slices/product_Slice";

const CartItem = ({ src, alt, productName, price, id, quantity }) => {
  const dispatch = useDispatch();

  let handleValuePlus = () => {
    dispatch(updateQuantityReducer({ id, quantity: (quantity || 1) + 1 }));
  };
  let handleValueMinus = () => {
    if (quantity > 1) {
      dispatch(updateQuantityReducer({ id, quantity: quantity - 1 }));
    }
  };

  let handleDeleteCart = () => {
    dispatch(removeCartReducer(id));
  };

  return (
    <div>
      <Flex className="items-center justify-between xl:px-[40px] lg:px-[20px] md:px-[10px] sm:px-3 px-[16px] py-[24px] reounded-[4px] drop-shadow-md shadow-md mt-[40px] ">
        <div className=" flex items-center justify-center gap-[20px] relative ">
          <div className=" relative">
            <img src={src} alt={alt} className="w-[54px]" />
            <MdCancel
              onClick={handleDeleteCart}
              className=" text-[24px] text-orange absolute top-[-10px] left-[-10px] bg-white rounded-full border-0 "
            />
          </div>
          <h2 className=" w-[200px] text-[16px] font-poppins font-normal leading-[24px] text-black absolute top-[50%] translate-y-[-50%] left-[80px] hidden sm:block md:block lg:block xl:block ">
            {productName ? `${productName.slice(0, 6)}...` : "Product"}
          </h2>
        </div>
        <h2 className=" text-[16px] font-normal leading-[24px] text-black font-poppins ">
          ${price}
        </h2>
        <Flex className=" w-[72px] items-center gap-[16px] px-[12px] py-[6px] border-[1px] border-[#808080] rounded-[4px] select-none relative ">
          <div className="text-[16px] font-medium font-poppins leading-[24px] text-black  ">
            {quantity || 1}
          </div>

          <div className=" absolute right-4 top-[50%] translate-y-[-50%] ">
            <FaAngleUp onClick={handleValuePlus} />

            <FaAngleDown onClick={handleValueMinus} />
          </div>
        </Flex>
        <h2 className=" text-[16px] font-normal leading-[24px] text-black font-poppins ">
          ${price * (quantity || 1)}
        </h2>
      </Flex>
    </div>
  );
};

export default CartItem;
