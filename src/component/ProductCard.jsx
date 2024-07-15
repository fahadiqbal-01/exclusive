import React from "react";
import Images from "./Images";
import Flex from "./Flex";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartReducer } from "../Slices/product_Slice";

const ProductCard = ({
  discount,
  productName,
  newPrice,
  oldPrice,
  productImg,
  reviewcount,
  rating,
  id,
  ProductDetails,
}) => {
  let navigate = useNavigate();

  let handleNavigate = () => {
    navigate(`/ProductAllDetails/${id}`);
  };

  let dispatch = useDispatch();

  let handleAddToCart = () => {
    dispatch(cartReducer(ProductDetails));
  };

  return (
    <div className="w-[90%] sm:w-[95%] md:w-[95%] lg:w-[270px] xl:w-[270px] mx-auto sm:mx-[8px] md:mx-[10px] lg:mx-[22px] xl:mx-0 relative ">
      <div className=" bg-secondary h-[250px] px-[40px] py-[35px] rounded-[4px] relative group duration-500 overflow-hidden ">
        <Images
          onClick={handleNavigate}
          src={productImg}
          alt="monitor-image"
          className="mx-auto w-[180px] sm:w-[200px] md:w-[80%] lg:w-auto xl:w-auto"
        />
        <h4 className=" text-[12px] font-normal font-poppins leading-[18px] text-white bg-orange w-[55px] px-[12px] py-[4px] rounded-[4px] absolute left-3 top-3 ">
          {discount}
        </h4>
        <div className=" absolute top-3 right-3 ">
          <div className=" bg-primary w-[34px] p-[5px] rounded-full">
            <IoEyeOutline className="text-[24px] text-black " />
          </div>
          <div className=" bg-primary w-[34px] p-[5px] rounded-full mt-[8px]">
            <CiHeart className="text-[24px] text-black " />
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="text-[16px] font-medium font-poppins text-primary leading-[24px] bg-black py-[8px] w-full
         px-[87px] rounded-b-[4px] text-center absolute left-0 bottom-[-100px] group-hover:bottom-0 duration-300 ease-in-out  "
        >
          Add To Cart
        </button>
      </div>
      <div className="mt-[16px] ">
        <h2 className="text-[16px] font-medium leading-6 font-poppins text-black">
          {productName}
        </h2>
        <Flex className=" items-center gap-3 mt-[8px] ">
          <h3 className="text-[16px] font-medium font-poppins leading-[24px] text-orange ">
            {newPrice}
          </h3>
          <h4 className="text-[16px] font-medium font-poppins leading-[24px] text-[#808080] line-through ">
            {oldPrice}
          </h4>
        </Flex>
        <Flex className=" items-center gap-[8px] mt-[8px]">
          <Rate value={rating} disabled />
          <h3 className=" text-[14px] font-semibold leading-[21px] font-poppins text-[#808080] ">
            {`(${reviewcount})`}
          </h3>
        </Flex>
      </div>
    </div>
  );
};

export default ProductCard;
