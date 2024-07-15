import React from "react";
import ListItems from "./ListItems";

const ProductCOlor = ({ title, color, className }) => {
  return (
    <ListItems
      className={` text-[16px] font-normal leading-[30px] text-black xl:text-[#767676] font-poppins flex items-center justify-start gap-[10px] ${className} `}
    >
      <span
        style={{ background: `${color}` }}
        className={` h-[11px] w-[11px] rounded-full `}
      ></span>
      {title}
    </ListItems>
  );
};

export default ProductCOlor;
