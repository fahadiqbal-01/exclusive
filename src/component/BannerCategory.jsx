import React, { useState } from "react";
import List from "./List";
import ListItems from "./ListItems";
import { FaAngleRight } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";

const BannerCategory = () => {
  let [categoryshow, setCategoryShow] = useState(false);
  let [active, setActive] = useState(false);

  let handleActive = () => {
    setActive(false);
  };

  return (
    <>
      <div className={`${categoryshow ? "z-50" : "z-auto"} relative  `}>
        <div
          onClick={() => setCategoryShow(!categoryshow)}
          className={`${
            categoryshow ? "bg-black text-white " : "bg-transparent text-black"
          } flex items-center gap-[8px] xl:hidden px-[8px] py-[2px] border-[2px] border-black rounded-lg w-[125px] ml-auto `}
        >
          <TbCategoryPlus className="text-[18px] " />
          <h2 className=" text-[16px] cursor-default font-poppins font-normal ">
            Category
          </h2>
        </div>
        <List
          className={`${
            categoryshow ? " block mt-4 bg-[#f5f5f5] border-[1px] border-gray-400 rounded-lg" : "hidden"
          } mr-0 xl:mr-[16px] xl:block absolute top-[25px] right-0 xl:static px-7 xl:px-0 py-4 xl:py-0`}
        >
          <ListItems
            onclick={handleActive}
            className=" text-[16px] font-poppins font-normal leading-[24px] text-black mb-[16px] flex items-center justify-between gap-5 xl:gap-0 cursor-pointer  "
          >
            Woman’s Fashion {true ? <FaAngleRight /> : ""}
          </ListItems>
          <ListItems className=" text-[16px] font-poppins font-normal leading-[24px] text-black mb-[16px] flex items-center justify-between cursor-pointer ">
            Men’s Fashion {true ? <FaAngleRight /> : ""}
          </ListItems>
          <ListItems className=" text-[16px] font-poppins font-normal leading-[24px] text-black mb-[16px] flex items-center justify-between cursor-pointer ">
            Electronics {false ? <FaAngleRight /> : ""}
          </ListItems>
          <ListItems className=" text-[16px] font-poppins font-normal leading-[24px] text-black mb-[16px] flex items-center justify-between cursor-pointer ">
            Home & Lifestyle {false ? <FaAngleRight /> : ""}
          </ListItems>
          <ListItems className=" text-[16px] font-poppins font-normal leading-[24px] text-black mb-[16px] flex items-center justify-between cursor-pointer ">
            Medicine {false ? <FaAngleRight /> : ""}
          </ListItems>
          <ListItems className=" text-[16px] font-poppins font-normal leading-[24px] text-black mb-[16px] flex items-center justify-between cursor-pointer ">
            Sports & Outdoor {false ? <FaAngleRight /> : ""}
          </ListItems>
          <ListItems className=" text-[16px] font-poppins font-normal leading-[24px] text-black mb-[16px] flex items-center justify-between cursor-pointer ">
            Baby’s & Toys {false ? <FaAngleRight /> : ""}
          </ListItems>
          <ListItems className=" text-[16px] font-poppins font-normal leading-[24px] text-black mb-[16px] flex items-center justify-between cursor-pointer ">
            Groceries & Pets {false ? <FaAngleRight /> : ""}
          </ListItems>
          <ListItems className=" text-[16px] font-poppins font-normal leading-[24px] text-black flex items-center justify-between cursor-pointer ">
            Health & Beauty {false ? <FaAngleRight /> : ""}
          </ListItems>
        </List>
      </div>
    </>
  );
};

export default BannerCategory;
