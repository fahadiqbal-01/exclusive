import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import FlashSales from "../component/FlashSales";
import BestSelling from "../component/BestSelling";
import CategoryThird from "../component/CategoryThird";
import CategorySecond from "../component/CategorySecond";
import ExploreProducts from "../component/ExploreProducts";
import NewArrival from "../component/NewArrival";
import CustomerService from "../component/CustomerService";
import axios from "axios";
import { useDispatch } from "react-redux";
import { productReducer } from "../Slices/product_Slice";
import { data } from "autoprefixer";

const Home = () => {
  let [allproducts, setAllProducts] = useState([]);
  let dispatch = useDispatch();

  async function getAllProducts() {
    let data = await axios.get("https://dummyjson.com/products");
    setAllProducts(data.data.products);
    dispatch(productReducer(data.data.products));
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Banner />
      <FlashSales products={allproducts} />
      <CategorySecond />
      <BestSelling products={allproducts} />
      <CategoryThird />
      <ExploreProducts product={allproducts} />
      <NewArrival />
      <CustomerService />
    </>
  );
};

export default Home;
