import React, { useEffect, useState } from "react";
import Container from "../component/Container";
import BreadCrumb from "../component/BreadCrumb";
import axios from "axios";
import { useParams } from "react-router-dom";
import Flex from "../component/Flex";
import Images from "../component/Images";
import { Rate } from "antd";
import SIze from "../component/SIze";
import { FaPlus, FaRegHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import Title from "../component/Title";
import ProductDetailSLide from "../component/ProductDetailSLide";

const ProductAllDetails = () => {
  let { id } = useParams();
  let [allproducts, setAllProducts] = useState([]);

  async function getAllProducts() {
    let data = await axios.get(`https://dummyjson.com/products/${id}`);
    setAllProducts(data.data);
  }

  useEffect(() => {
    getAllProducts();
  }, []);


  let [blue, setBlue] = useState(false);

  let handleBlue = () => {
    setBlue(true);
  };

  let handleMaroon = () => {
    setBlue(false);
  };

  let [value, setValue] = useState("1");

  let handleValuePlus = () => {
    setValue(parseInt(value) + 1);
  };
  let handleValueMinus = () => {
    setValue(parseInt(value) - 1);
  };

  return (
    <section>
      <Container>
        <BreadCrumb />
        <Flex>
          <div className=" flex gap-[30px] items-center w-[65%] ">
            <div className=" flex flex-col gap-[16px] ">
              <Images
                src={allproducts.thumbnail}
                className={`${
                  blue ? "bg-[#A0BCE0]" : "bg-secondary"
                }  w-[170px]`}
              />
              <Images
                src={allproducts.thumbnail}
                className={`${
                  blue ? "bg-[#A0BCE0]" : "bg-secondary"
                }  w-[170px]`}
              />
              <Images
                src={allproducts.thumbnail}
                className={`${
                  blue ? "bg-[#A0BCE0]" : "bg-secondary"
                }  w-[170px]`}
              />
              <Images
                src={allproducts.thumbnail}
                className={`${
                  blue ? "bg-[#A0BCE0]" : "bg-secondary"
                }  w-[170px]`}
              />
            </div>
            <Images
              src={allproducts.thumbnail}
              className={`${
                blue ? "bg-[#A0BCE0]" : "bg-secondary"
              } w-full scale-[.9]`}
            />
          </div>
          <div className=" w-[35%]">
            <h1 className=" text-[24px] font-semibold leading-[24px] text-black font-inter ">
              Havic HV G-92 Gamepad
            </h1>
            {/* ===  product title === */}

            <Flex className=" items-center gap-[16px] mt-[16px] ">
              <div className=" flex items-center gap-[8px] ">
                <Rate
                  className=" text-[#FFAD33]"
                  value={allproducts.rating}
                  disabled
                />
                <h4 className="text-[14px] font-poppins font-normal leading-[21px] text-[#7D8184] ">{` (${allproducts.reviews?.length} Reviews)`}</h4>
              </div>
              <div className=" flex items-center gap-4 ">
                <span>|</span>
                <h4 className=" text-[16px] font-poppins font-normal leading-[21px] text-[#00FF66] ">
                  {allproducts.availabilityStatus}
                </h4>
              </div>
            </Flex>
            {/* ===  product rating, availability, reviews === */}

            <h2 className=" text-[24px] font-normal font-inter leading-[24px] text-black tracking-[3%] mt-[16px] ">
              {`$${Math.floor(
                allproducts.price -
                  (allproducts.discountPercentage / 100) * allproducts.price
              )}`}
            </h2>
            {/* ===  product price === */}

            <p className=" w-[373px] text-[14px] font-poppins font-normal text-black leading-[21px] mt-[24px] border-b-[1px] border-[#7D8184] pb-[24px] ">
              {allproducts.description}
            </p>
            {/* ===  product description === */}

            <div>
              <h4 className=" text-[20px] leading-[20px] font-inter font-normal tracking-[3%] mt-[24px] flex items-center gap-[24px] ">
                Colours:
                <div className=" flex items-center gap-[8px] ">
                  <button
                    onClick={handleBlue}
                    className=" h-[20px] w-[20px]  rounded-full border-[2px] hover:border-black bg-[#A0BCE0] duration-300 ease-out "
                  ></button>
                  <button
                    onClick={handleMaroon}
                    className=" h-[20px] w-[20px] rounded-full border-[2px] hover:border-black bg-[#E07575] duration-300 ease-out "
                  ></button>
                </div>
              </h4>
            </div>
            {/* ===  product bg color === */}

            <div className=" flex items-center gap-[16px] mt-[24px] ">
              <h4 className=" text-[20px] leading-[20px] font-inter font-normal tracking-[3%] mr-[8px] ">
                Size:
              </h4>
              <SIze sizes="XS" />
              <SIze sizes="S" />
              <SIze sizes="M" />
              <SIze sizes="L" />
              <SIze sizes="XL" />
            </div>
            {/* ===  product size === */}

            <div className=" mt-[24px] flex items-center justify-between ">
              <Flex className=" items-center">
                <span
                  onClick={handleValueMinus}
                  className=" text-[24px] px-[8px] py-[10px] border-[1px] border-[#808080] rounded-l-[4px] cursor-pointer "
                >
                  <FiMinus />
                </span>
                <div className=" w-[80px] text-[20px] font-medium font-poppins leading-[28px] text-black px-[34px] py-[8px] border-[1px] border-[#808080] select-none  ">
                  {value}
                </div>
                <span
                  onClick={handleValuePlus}
                  className=" text-[24px] px-[8px] py-[10px] border-[1px] border-[#808080] rounded-r-[4px] cursor-pointer "
                >
                  <GoPlus />
                </span>
              </Flex>
              <button
                className=" text-[16px] font-medium leading-[24px] font-poppins text-white px-[48px] select-none 
                py-[10px] bg-orange rounded-[4px] "
              >
                Buy Now
              </button>
              <button className=" px-[10px] py-[11px] text-[20px] border-[1px] border-[#808080] rounded-[4px] ">
                <FaRegHeart />{" "}
              </button>
            </div>
            {/* ===  product quantity, wishlist, buynow === */}

            <Flex className=" flex-col mt-[40px] ">
              <div className=" flex items-center gap-[16px] pl-[16px] pb-[16px] pt-[24px] pr-[51px] border-[1px] border-[#7D8184] rounded-t-[4px] ">
                <TbTruckDelivery className=" text-[40px] " />
                <h2 className=" text-[16px] font-medium font-poppins leading-[24px] text-black ">
                  Free Delivery <br />
                  <span className="text-[12px] font-medium font-poppins leading-[18px] text-black mt-[8px] ">
                    Enter your postal code for Delivery Availability
                  </span>
                </h2>
              </div>
              <div className=" flex items-center gap-[16px] pl-[16px] pb-[16px] pt-[24px] pr-[51px] border-[1px] border-[#7D8184] rounded-b-[4px]  ">
                <TfiReload className=" text-[40px] " />
                <h2 className=" text-[16px] font-medium font-poppins leading-[24px] text-black ">
                  Return Delivery
                  <br />
                  <span className="text-[12px] font-medium font-poppins leading-[18px] text-black mt-[8px] ">
                    Free 30 Days Delivery Returns. Details
                  </span>
                </h2>
              </div>
            </Flex>
            {/* ===  product delivery details === */}
          </div>
        </Flex>
        <div className=" mt-[140px] mb-[60px] ">
          <Title subtitle="Related Item" />
          <ProductDetailSLide products />
        </div>
      </Container>
    </section>
  );
};

export default ProductAllDetails;
