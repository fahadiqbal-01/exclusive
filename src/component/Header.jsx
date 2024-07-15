import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black py-[5px] xl:py-[12px]">
      <Container>
        <div className=" relative ">
          <h3 className=" font-poppins font-normal text-[12px] xl:text-[14px] leading-[21px] text-white text-center w-[75%] xl:w-full pl-[5px] xl:pl-0 ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link className=" font-semibold leading-[24px] underline ml-2 ">
              ShopNow
            </Link>
          </h3>

          <select
            id="countries"
            className=" w-[78px] bg-black text-white focus:outline-none absolute right-0 top-0"
          >
            <option value="EN">English</option>
            <option value="BN">Bangla</option>
          </select>
        </div>
      </Container>
    </header>
  );
};

export default Header;
