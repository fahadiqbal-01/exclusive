import React, { useEffect, useState } from "react";
import Container from "../component/Container";
import BreadCrumb from "../component/BreadCrumb";
import Flex from "../component/Flex";
import ShopByColor from "../component/ShopByColor";
import { BiCategoryAlt } from "react-icons/bi";
import ShopByProducts from "../component/ShopByProducts";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { filterProductReducer, productReducer } from "../Slices/product_Slice";
import { List } from "antd";
import ListItems from "../component/ListItems";

const Shop = () => {
  let filterData = useSelector((state) => state.allproduct);

  let [categorytoogle, setCategoryToogle] = useState(false);
  let [allproducts, setAllProducts] = useState([]);
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);

  async function getAllProducts() {
    let data = await axios.get("https://dummyjson.com/products");
    setAllProducts(data.data.products);
    dispatch(productReducer(data.data.products));
    setLoading(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  let [ucategory, setUcategory] = useState([]);

  useEffect(() => {
    let uniqueCategory = [...new Set(allproducts.map((item) => item.category))];
    setUcategory(uniqueCategory);
  }, [allproducts]);

  let handleFilterCategory = (item) => {
    let filterProduct = allproducts.filter((Uitem) => Uitem.category == item);
    dispatch(filterProductReducer(filterProduct));
  };

  let handleAllProducts = () => {
    dispatch(productReducer(allproducts));
  };

  return (
    <section className=" mb-[104px] " id="shop">
      <Container>
        <BreadCrumb />

        <Flex className=" flex-col xl:flex-row ">
          <div className="w-full xl:w-[25%] relative z-50">
            <div
              onClick={() => setCategoryToogle(!categorytoogle)}
              className={`${
                categorytoogle ? "bg-black text-white no-underline" : ""
              } xl:hidden flex items-center gap-[10px] px-[5px] py-[2px] underline rounded-lg w-[120px] ml-5 xl:ml-0 `}
            >
              <BiCategoryAlt className=" text-[18px] " />
              <h4 className="text-[16px] cursor-default font-poppins font-normal">
                Category
              </h4>
            </div>

            <div
              className={` ${
                categorytoogle
                  ? "flex items-start justify-start gap-4 md:gap-[100px] lg:gap-[150px] border-[2px] border-gray-400 "
                  : "hidden"
              } xl:block absolute left-5 top-[40px] xl:static px-[10px] xl:px-0 py-5 xl:py-0 rounded-lg xl:rounded-0 bg-[#f5f5f5] xl:bg-transparent ml-auto`}
            >
              <div>
                <h2 className=" text-[18px] xl:text-[20px] font-bold text-gray-400 xl:text-[#262626] underline xl:no-underline ">
                  Shop by Category
                </h2>

                <List className=" mt-[8px] xl:mt-[15px]">
                  <ListItems
                    onClick={handleAllProducts}
                    className=" text-[14px] xl:text-[16px] font-poppins font-normal leading-[24px] text-black mb-[10px] xl:mb-[16px] flex items-center justify-between cursor-pointer capitalize "
                  >
                    All products
                  </ListItems>
                  {ucategory.map((item) => (
                    <ListItems
                      onClick={() => handleFilterCategory(item)}
                      className=" text-[14px] xl:text-[16px] font-poppins font-normal leading-[24px] text-black mb-[10px] xl:mb-[16px] flex items-center justify-between cursor-pointer capitalize "
                    >
                      {item}
                    </ListItems>
                  ))}
                </List>
              </div>
              <ShopByColor />
            </div>
          </div>

          <div
            className={` ${
              categorytoogle ? "mt-[400px]" : "mt-0"
            } w-full sm:w-full md:w-full lg:w-full xl:w-[75%] px-1 sm:px-1 md:px-2 lg:px-2 xl:px-0 duration-300 `}
          >
            <ShopByProducts loading={loading} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
