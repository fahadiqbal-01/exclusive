import React, { useState } from "react";
import ProductCard from "../component/ProductCard";
import Flex from "./Flex";
import Skeleton from "./Skeleton";
import Pagination from "./Pagination";

const ShopByProducts = ({ loading }) => {

  let [itemperpage, setItemPErPage] = useState(9);


  let handleItemPerPage = (e) => {
    setItemPErPage(e.target.value);
  };


  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <div>
          <div className=" mt-[5px] xl:mt-0 mb-[30px] mr-5 xl:mr-0 hidden md:block lg:block xl:block ">
            <div className="flex items-center justify-end gap-[12px]">
              <h2 className=" text-[16px] font-normal font-poppins leading-[24px] text-black ">
                Show :
              </h2>
              <select
                onChange={handleItemPerPage}
                id="PRODUCT_NUMBER"
                className="w-[97px] h-[29px] text-center text-black text-[16px] font-poppins font-normal leading-[24px] rounded-[5px] cursor-pointer border border-solid border-[#D9D9D9] focus:border-0 "
              >
                <option value="6">6</option>
                <option value="9" selected>
                  9
                </option>
                <option value="12">12</option>
                <option value="18">18</option>
              </select>
            </div>
          </div>
          <Flex className=" justify-between flex-wrap xl:flex-wrap gap-[30px] mt-[20px] sm:mt-[20px] md:mt-0 lg:mt-0 xl:mt-0 ">
            <Pagination itemsPerPage={itemperpage}/>
          </Flex>
        </div>
      )}
    </div>
  );
};

export default ShopByProducts;
