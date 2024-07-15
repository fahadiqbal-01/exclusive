import React from 'react'
import Images from "./Images";
import Flex from "./Flex";
import List from "./List";
import ListItems from "./ListItems";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const ProductCardTwo = ({price, ProductName, productImg}) => {
  return (
    <div className=" w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[270px] mx-auto xl:mx-0 relative mb-[60px] ">
    <div className=" bg-secondary h-[250px] px-[40px] py-[35px] rounded-[4px] relative group duration-500 overflow-hidden ">
      <Images src={productImg} alt="monitor-image" className="mx-auto"/>
      <div className=" absolute top-3 right-3 ">
        <div className=" bg-primary w-[34px] p-[5px] rounded-full">
          <IoEyeOutline className="text-[24px] text-black " />
        </div>
        <div className=" bg-primary w-[34px] p-[5px] rounded-full mt-[8px]">
          <CiHeart className="text-[24px] text-black " />
        </div>
      </div>
      <button className="text-[16px] font-medium font-poppins text-primary leading-[24px] bg-black py-[8px] w-full
       px-[87px] rounded-b-[4px] text-center absolute left-0 bottom-[-100px] group-hover:bottom-0 duration-300 ease-in-out  ">
        Add To Cart
      </button>
    </div>
    <div className="mt-[16px] ">
      <h2 className="text-[16px] font-medium leading-6 font-poppins text-black">
        {ProductName}
      </h2>
      <Flex className=" items-center gap-[8px] mt-[8px]">
        <h4 className=' text-[16px] font-medium font-poppins leading-[24px] text-orange '>{price}</h4>
        <List className="flex items-center justify-center">
          <ListItems className=" text-[20px] text-yellow ">
            <FaStar />
          </ListItems>
          <ListItems className=" text-[20px] text-yellow ">
            <FaStar />
          </ListItems>
          <ListItems className=" text-[20px] text-yellow ">
            <FaStar />
          </ListItems>
          <ListItems className=" text-[20px] text-yellow ">
            <FaStar />
          </ListItems>
          <ListItems className=" text-[20px] text-yellow ">
            <FaStar />
          </ListItems>
          <ListItems className=" text-[20px] text-yellow ">
            <FaStar />
          </ListItems>
        </List>
        <h3 className=" text-[14px] font-semibold leading-[21px] font-poppins text-[#808080] ">
          (99)
        </h3>
      </Flex>
    </div>
  </div>
  )
}

export default ProductCardTwo