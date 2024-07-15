import React from "react";
import List from "./List";
import ListItems from "./ListItems";
import { useLocation } from "react-router-dom";

const BreadCrumb = () => {
  let location = useLocation().pathname;
  let locationPathname = location.split("/")[1];

  return (
    <div className=" mt-[20px] lg:mt-[60px] xl:mt-[80px] mb-[15px] lg:mb-30px xl:mb-[50px] ml-5 xl:ml-0 ">
      <List className=" flex justify-start items-center gap-[12px] ">
        <ListItems className=" text-[14px] font-medium font-poppins leading-[21px] text-gray-400 ">
          Home
        </ListItems>
        <ListItems className="text-gray-400">/</ListItems>
        <ListItems className=" text-[14px] font-medium font-poppins leading-[21px] text-gray-400 ">
          {locationPathname}
        </ListItems>
      </List>
    </div>
  );
};

export default BreadCrumb;
