import React, { useState } from "react";
import Container from "./Container";
import Images from "./Images";
import List from "./List";
import ListItems from "./ListItems";
import { CiHeart, CiSearch, CiStar } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { RiH1, RiMenu4Fill, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";

const NavBar = () => {
  let [toogle, setToogle] = useState(false);
  let [profileactive, setProfileActive] = useState(false);

  let handleToogle = () => {
    setToogle(!toogle);
  };
  let handleClose = () => {
    setToogle(false);
  };

  return (
    <nav
      className={`${
        toogle ? "bg-black border-b-0 " : "bg-transparent border-b-[1px]"
      } pt-[15px] xl:pt-[40px] pb-[16px]`}
    >
      <Container>
        <div className="flex justify-between items-center relative z-50">
          <Link to="/">
            {" "}
            <Images
              src="images/Logo.png"
              alt="navlogo"
              className={`${
                toogle
                  ? "invert-[100%] grayscale-[100%]"
                  : "invert-0 grayscale-0"
              } pl-[10px] xl:pl-0 `}
            />
          </Link>

          <div
            className={`${
              toogle ? "block" : "hidden"
            } xl:flex items-center justify-between xl:w-[73%] w-full absolute left-0 top-10 xl:static bg-black xl:bg-transparent py-[15px] xl:py-0 px-[10px] xl:px-0  `}
          >
            <List className="block xl:flex gap-[45px] items-center ">
              <ListItems
                className="text-[16px] font-poppins font-normal leading-[24px] text-white xl:text-black after:centent-[''] after:h-[1px] after:w-0
             after:bg-black after:absolute after:bottom-0 after:left-0 hover:after:w-full after:duration-500 after:ease-out  relative cursor-default mb-[15px] xl:mb-0  "
              >
                <Link onClick={handleClose} to="/">
                  Home
                </Link>
              </ListItems>
              <ListItems
                className="text-[16px] font-poppins font-normal leading-[24px] text-white xl:text-black after:centent-[''] after:h-[1px] after:w-0
             after:bg-black after:absolute after:bottom-0 after:left-0 hover:after:w-full after:duration-500 after:ease-out  relative cursor-default mb-[15px] xl:mb-0  "
              >
                <Link onClick={handleClose} to="/Shop">
                  Shop
                </Link>
              </ListItems>
              <ListItems
                className="text-[16px] font-poppins font-normal leading-[24px] text-white xl:text-black after:centent-[''] after:h-[1px] after:w-0
                after:bg-black  after:absolute after:bottom-0 after:left-0 hover:after:w-full after:duration-500 after:ease-out  relative cursor-default mb-[15px] xl:mb-0  "
              >
                <Link onClick={handleClose} to="/Contact">
                  Contact
                </Link>
              </ListItems>
              <ListItems
                className="text-[16px] font-poppins font-normal leading-[24px] text-white xl:text-black after:centent-[''] after:h-[1px] after:w-0
             after:bg-black after:absolute after:bottom-0 after:left-0 hover:after:w-full after:duration-500 after:ease-out  relative cursor-default mb-[15px] xl:mb-0  "
              >
                <Link onClick={handleClose} to="/About">
                  About
                </Link>
              </ListItems>
              <ListItems
                className="text-[16px] font-poppins font-normal leading-[24px] text-white xl:text-black after:centent-[''] after:h-[1px] after:w-0
             after:bg-black after:absolute after:bottom-0 after:left-0 hover:after:w-full after:duration-500 after:ease-out  relative cursor-default mb-[15px] xl:mb-0  "
              >
                <Link onClick={handleClose} to="/SignUP">
                  Sign Up
                </Link>
              </ListItems>
            </List>
            <div className=" flex items-center gap-[24px] mt-3 xl:mt-0 ">
              <div className=" relative w-[243px] ">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full h-[38px] bg-[#F5F5F5] text-[12px] px-[20px] py-[10px] rounded-[4px] font-poppins placeholder:text-[12px] font-[400] leading-[18px] text-black "
                />
                <CiSearch className=" absolute right-[14px] top-[8px] text-[24px] " />
              </div>
              <div className=" flex gap-[16px] items-center ">
                <a href="#">
                  <CiHeart className=" text-[32px] text-white xl:text-black " />
                </a>
                <a href="#">
                  <Link to="/Cart">
                    <PiShoppingCartLight className=" text-[32px] text-white xl:text-black " />
                  </Link>
                </a>
                <div className=" relative">
                  <CgProfile
                    onClick={() => setProfileActive(!profileactive)}
                    className="text-[32px] text-white xl:text-black"
                  />
                  <div
                    className={`${
                      profileactive ? "block" : "hidden"
                    } profie_dropdown absolute right-0 top-[35px] rounded-[4px] px-[18px] py-[20px] w-[230px] `}
                  >
                    <List>
                      <ListItems className=" flex items-center justify-start gap-[16px] ">
                        <CgProfile className="text-[32px] text-white " />
                        <h4 className=" text-[14px] font-normal font-poppins leading-[21px] text-[#FAFAFA] ">
                          Manage My Account
                        </h4>{" "}
                      </ListItems>
                      <ListItems className=" flex items-center justify-start gap-[16px] mt-[13px] ">
                        <FiShoppingBag className="text-[32px] text-white " />
                        <h4 className=" text-[14px] font-normal font-poppins leading-[21px] text-[#FAFAFA] ">
                          My Order
                        </h4>{" "}
                      </ListItems>
                      <ListItems className=" flex items-center justify-start gap-[16px] mt-[13px] ">
                        <MdOutlineCancel className="text-[32px] text-white " />
                        <h4 className=" text-[14px] font-normal font-poppins leading-[21px] text-[#FAFAFA] ">
                          My Cancellations
                        </h4>{" "}
                      </ListItems>
                      <ListItems className=" flex items-center justify-start gap-[16px] mt-[13px] ">
                        <FaRegStar className="text-[32px] text-white " />
                        <h4 className=" text-[14px] font-normal font-poppins leading-[21px] text-[#FAFAFA] ">
                          My Reviews
                        </h4>{" "}
                      </ListItems>
                      <ListItems className=" flex items-center justify-start gap-[16px] mt-[13px] ">
                        <TbLogout2 className="text-[32px] text-white " />
                        <h4 className=" text-[14px] font-normal font-poppins leading-[21px] text-[#FAFAFA] ">
                          Logout
                        </h4>{" "}
                      </ListItems>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RiMenu5Fill
            onClick={handleToogle}
            className={`${
              toogle
                ? " text-white border-solid border-[2px] border-white rounded-lg"
                : "text-black"
            } absolute top-[-3px] right-0 text-[30px] xl:hidden mr-3`}
          />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
