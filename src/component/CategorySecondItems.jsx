import React from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoCameraOutline, IoWatchOutline } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import { RiHeadphoneLine } from "react-icons/ri";

const CategorySecondItems = () => {
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
          top: "-96px",
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
          top: "-96px",
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
    slidesToShow: 6,
    slidesToScroll: 3,

    autoplaySpeed: 3000,
    cssEase: "ease-out",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>

           <div className="w-[170px] h-[145px] border-[1px] text-center border-black rounded-[4px] mx-auto hover:bg-orange hover:border-transparent transition duration-300 ease-linear group  ">
            <SlScreenSmartphone className="text-[56px] text-black mx-auto mt-[25px] group-hover:text-primary duration-300 ease-linear " />
            <h4 className="text-[16px] font-normal font-poppins leading-[24px] text-black mt-[16px] group-hover:text-primary duration-300 ease-in-out">
              Phones
            </h4>
          </div>
         
        </div>
        <div>
          <div className="w-[170px] h-[145px] border-[1px] text-center border-black rounded-[4px] mx-auto hover:bg-orange hover:border-transparent transition duration-300 ease-linear group  ">
            <HiOutlineDesktopComputer className="text-[56px] text-black mx-auto mt-[25px] group-hover:text-primary duration-300 ease-linear " />
            <h4 className="text-[16px] font-normal font-poppins leading-[24px] text-black mt-[16px] group-hover:text-primary duration-300 ease-in-out">
              Computers
            </h4>
          </div>
        </div>
        <div>
          <div className="w-[170px] h-[145px] border-[1px] text-center border-black rounded-[4px] mx-auto hover:bg-orange hover:border-transparent transition duration-300 ease-linear group  ">
            <IoWatchOutline className="text-[56px] text-black mx-auto mt-[25px] group-hover:text-primary duration-300 ease-linear " />
            <h4 className="text-[16px] font-normal font-poppins leading-[24px] text-black mt-[16px] group-hover:text-primary duration-300 ease-in-out">
              SmartWatch
            </h4>
          </div>
        </div>
        <div>
          <div className="w-[170px] h-[145px] border-[1px] text-center border-black rounded-[4px] mx-auto hover:bg-orange hover:border-transparent transition duration-300 ease-linear group  ">
            <IoCameraOutline className="text-[56px] text-black mx-auto mt-[25px] group-hover:text-primary duration-300 ease-linear " />
            <h4 className="text-[16px] font-normal font-poppins leading-[24px] text-black mt-[16px] group-hover:text-primary duration-300 ease-in-out">
              Camera
            </h4>
          </div>
        </div>
        <div>
          <div className="w-[170px] h-[145px] border-[1px]  text-center border-black rounded-[4px] mx-auto hover:bg-orange hover:border-transparent transition duration-300 ease-linear group  ">
            <RiHeadphoneLine className="text-[56px] text-black mx-auto mt-[25px] group-hover:text-primary duration-300 ease-linear " />
            <h4 className="text-[16px] font-normal font-poppins leading-[24px] text-black mt-[16px] group-hover:text-primary duration-300 ease-in-out">
              HeadPhones
            </h4>
          </div>
        </div>
        <div>
          <div className="w-[170px] h-[145px] border-[1px] text-center border-black rounded-[4px] mx-auto hover:bg-orange hover:border-transparent transition duration-300 ease-linear group  ">
            <LuGamepad className="text-[56px] text-black mx-auto mt-[25px] group-hover:text-primary duration-300 ease-linear " />
            <h4 className="text-[16px] font-normal font-poppins leading-[24px] text-black mt-[16px] group-hover:text-primary duration-300 ease-in-out">
              Gaming
            </h4>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CategorySecondItems;
