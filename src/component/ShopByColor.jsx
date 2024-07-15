import React from "react";
import List from "./List";
import ProductCOlor from "./ProductCOlor";

const ShopByColor = () => {
  return (
    <div>
      <h2 className="text-[20px] font-bold text-gray-400 xl:text-[#262626] mt-0 xl:mt-[40px] underline xl:no-underline ">
        Shop by Color
      </h2>
      <List>
        <ProductCOlor title="Color 1" color="#000000" className=" mt-[15px] " />
        <ProductCOlor title="Color 2" color="#FF0000" className=" mt-[18px] " />
        <ProductCOlor title="Color 3" color="#00FF38" className=" mt-[18px] " />
      </List>
    </div>
  );
};

export default ShopByColor;
