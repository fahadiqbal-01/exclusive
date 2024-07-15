import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import Images from "./Images";
import secure_icon from "../images/Icon-secure.png";

const CustomerService = () => {
  return (
    <section className=" mb-[140px]">
      <Container>
        <Flex className=" items-center justify-evenly px-0 sm:px-2 md:px-5 lg:px-8 xl:px-0 ">
          <div className="text-center">
            <div className="p-[10px] bg-black rounded-full border-[11px] border-[#c1c0c1] inline-block ">
              <TbTruckDelivery className=" text-[40px] text-white " />
            </div>
            <h1 className=" text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold font-poppins leading-4 lg:leading-[8px] xl:leading-[8px] text-black mt-[24px] ">
              FREE AND FAST DELIVERY
            </h1>
            <h4 className="text-[12px] sm:text-[11px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-normal font-poppins leading-[21px] text-black mt-[8px] ">
              Free delivery for all orders over $140
            </h4>
          </div>
          <div className="text-center">
            <div className="p-[10px] bg-black rounded-full border-[11px] border-[#c1c0c1] inline-block ">
              <RiCustomerServiceLine className=" text-[40px] text-white " />
            </div>
            <h1 className="  text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold font-poppins leading-4 lg:leading-[8px] xl:leading-[8px] text-black mt-[24px] ">
              24/7 CUSTOMER SERVICE
            </h1>
            <h4 className="text-[12px] sm:text-[11px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-normal font-poppins leading-[21px] text-black mt-[8px] ">
              Friendly 24/7 customer support
            </h4>
          </div>
          <div className="text-center">
            <div className="p-[10px] bg-black rounded-full border-[11px] border-[#c1c0c1] inline-block ">
              <Images src={secure_icon} alt="secure_icon" />
            </div>
            <h1 className="  text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold font-poppins leading-4 lg:leading-[8px] xl:leading-[8px] text-black mt-[24px] ">
              FREE AND FAST DELIVERY
            </h1>
            <h4 className="text-[12px] sm:text-[11px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-normal font-poppins leading-[21px] text-black mt-[8px] ">
              Free delivery for all orders over $140
            </h4>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default CustomerService;
