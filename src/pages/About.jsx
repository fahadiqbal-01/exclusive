import React from "react";
import Container from "../component/Container";
import BreadCrumb from "../component/BreadCrumb";
import Flex from "../component/Flex";
import Images from "../component/Images";
import CustomerService from "../component/CustomerService";
import { CiShop, CiDollar, CiBag1 } from "react-icons/ci";
import { PiMoney } from "react-icons/pi";
import signup_img from "../images/SignUP_Image.png"; // Reusing an existing image asset

const About = () => {
  return (
    <section className="pb-[140px]">
      <Container>
        <BreadCrumb />

        {/* Our Story Section */}
        <Flex className="items-center justify-between flex-col lg:flex-row gap-[30px] lg:gap-0 mt-[42px] mb-[140px]">
          <div className="w-full lg:w-[525px] px-2 lg:px-0">
            <h1 className="text-[54px] font-semibold font-inter leading-[64px] tracking-[6%] text-black mb-[40px]">
              Our Story
            </h1>
            <p className="text-[16px] font-poppins font-normal leading-[26px] text-black mb-[24px]">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sallers and 300 brands and serves
              3 millions customers across the region.
            </p>
            <p className="text-[16px] font-poppins font-normal leading-[26px] text-black">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="w-full lg:w-[705px]">
            <Images
              src={signup_img}
              alt="story_image"
              className="w-full rounded-[4px]"
            />
          </div>
        </Flex>

        {/* Stats Section */}
        <Flex className="flex-wrap justify-between gap-[30px] mb-[140px] px-2 lg:px-0">
          {[
            {
              icon: <CiShop />,
              count: "10.5k",
              label: "Sellers active our site",
            },
            {
              icon: <CiDollar />,
              count: "33k",
              label: "Monthly Product Sale",
              active: true,
            },
            {
              icon: <CiBag1 />,
              count: "45.5k",
              label: "Customer active in our site",
            },
            {
              icon: <PiMoney />,
              count: "25k",
              label: "Anual gross sale in our site",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`w-full sm:w-[270px] py-[30px] border-[1px] border-[#0000004d] rounded-[4px] text-center group hover:bg-orange hover:border-transparent transition-all duration-300 ${
                stat.active
                  ? "bg-orange border-transparent text-white"
                  : "bg-white text-black"
              }`}
            >
              <div
                className={`p-[10px] rounded-full border-[11px] inline-block mb-[24px] ${stat.active ? "bg-white border-[#ffffff4d]" : "bg-black border-[#c1c0c1] group-hover:bg-white group-hover:border-[#ffffff4d]"}`}
              >
                <span
                  className={`text-[40px] ${stat.active ? "text-black" : "text-white group-hover:text-black"}`}
                >
                  {stat.icon}
                </span>
              </div>
              <h2
                className={`text-[32px] font-bold font-inter leading-[30px] tracking-[4%] mb-[12px] ${stat.active ? "text-white" : "text-black group-hover:text-white"}`}
              >
                {stat.count}
              </h2>
              <p
                className={`text-[16px] font-poppins font-normal leading-[24px] ${stat.active ? "text-white" : "text-black group-hover:text-white"}`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </Flex>

        {/* Customer Service Features */}
        <CustomerService />
      </Container>
    </section>
  );
};

export default About;
