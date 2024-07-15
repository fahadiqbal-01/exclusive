import React from "react";
import Container from "./Container";
import Images from "./Images";
import { VscSend } from "react-icons/vsc";
import List from "./List";
import ListItems from "./ListItems";
import Flex from "./Flex";
import playstoreicon from "../images/playstoreicon.png";
import appstoreicon from "../images/appstoreicon.png";
import qrcodeicon from "../images/Qr Code.png";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className=" bg-black pt-[30px] lg:pt-[80px] xl:pt-[80px] after:content-[''] after:h-[1px] after:w-full after:absolute after:bg-[#3d3d3d] after:left-0 after:bottom-[64px] relative ">
      <Container>
        <Flex
          className="items-center sm:items-start md:items-start lg:items-start xl:items-start justify-center lg:justify-between
         xl:justify-between pb-[60px] flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row px-2 lg:px-3 xl:px-3 "
        >
          <div className=" flex xl:static items-start justify-between w-full xl:w-auto gap-1 xl:gap-[90px] mr-0 sm:mr-2 md:mr-[-10px] lg:mr-[-15px] xl:mr-0 ml-4 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 ">
            <div className=" w-[60%] sm:w-[80%] md:w-[80%] lg:w-auto xl:w-auto ">
              <Images
                src="images/Logo.png"
                className="invert-[100%] grayscale-[100%] "
              />
              <h2 className=" text-[20px] font-medium font-poppins leading-[28px] text-white mt-2 lg:mt-[24px] xl:mt-[24px] ">
                Subscribe
              </h2>
              <h4 className=" text-[12px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] text-white font-poppins mt-2 lg:mt-[24px] xl:mt-[24px] ">
                Get 10% off your first order
              </h4>
              <div className="mt-[16px] inline-block relative ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" w-[90%] lg:w-full xl:w-full bg-black outline-[1.5px] outline-white border-[1.5px] border-white rounded-[4px] text-[14px] md:text-[16px] lg:text-18 xl:text-[20px]
                 placeholder:text-[10px] placeholder:md:text-[10px] placeholder:lg:text-[16px] placeholder:xl:text-[16px] font-normal leading-[24px] font-poppins text-white py-[12px] pl-2 xl:pl-[16px] "
                />
                <VscSend className=" text-[20px] lg:text-[24px] xl:text-[24px] text-white absolute top-[30%] transform -translate-x-[30%] right-[25px] sm:right-3 md:right-[18px] lg:right-1 xl:right-1 " />
              </div>
            </div>
            <div className="w-[175px]">
              <label className=" text-[20px] font-medium leading-[28px] font-poppins text-white ">
                Support
              </label>
              <List>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-[24px]">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </ListItems>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 md:mt-[16px] lg:mt-[16px] xl:mt-[16px]">
                  exclusive@gmail.com
                </ListItems>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 md:mt-[16px] lg:mt-[16px] xl:mt-[16px]">
                  +88015-88888-9999
                </ListItems>
              </List>
            </div>
          </div>
          <div className=" flex xl:static justify-evenly gap-0 xl:gap-[50px] mt-5 sm:mt-0 lg:mt-0 xl:mt-0 w-full xl:w-auto mr-0 sm:mr-2 md:mr-0 lg:mr-0 xl:mr-0 ">
            <div className=" mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 ">
              <label className=" text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] font-medium leading-[28px] font-poppins text-white ">
                Account
              </label>
              <List>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 lg:mt-[24px] xl:mt-[24px]">
                  My Account
                </ListItems>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 lg:mt-[16px] xl:mt-[16px]">
                  Login / Register
                </ListItems>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 lg:mt-[16px] xl:mt-[16px]">
                  Cart
                </ListItems>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 lg:mt-[16px] xl:mt-[16px]">
                  Wishlist
                </ListItems>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 lg:mt-[16px] xl:mt-[16px]">
                  Shop
                </ListItems>
              </List>
            </div>
            <div className=" mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 ">
              <label className=" text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] font-medium leading-[28px] font-poppins text-white ">
                Quick Link
              </label>
              <List>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-[16px] lg:mt-[24px] xl:mt-[24px]">
                  Privacy Policy
                </ListItems>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 lg:mt-[16px] xl:mt-[16px]">
                  Terms Of Use
                </ListItems>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 lg:mt-[16px] xl:mt-[16px]">
                  FAQ
                </ListItems>
                <ListItems className=" text-[12px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-normal leading-[24px] font-poppins text-white mt-2 lg:mt-[16px] xl:mt-[16px]">
                  Contact
                </ListItems>
              </List>
            </div>
          </div>

          <div className="text-center mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 px-0 md:px-2 ">
            <label className=" text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] font-medium leading-[28px] font-poppins text-white ">
              Download App
            </label>
            <h4 className=" text-[12px] font-poppins font-medium leading-[18px] text-white mt-[24px] ">
              Save $3 with App New User Only
            </h4>
            <Flex className="mt-[8px] inline-block gap-3 sm:gap-4 md:gap-5 lg:gap-[10px] xl:gap-[10px] justify-center lg:justify-between xl:justify-between ">
              <Images
                src={qrcodeicon}
                alt="qrcode_icon"
                className=" w-auto sm:w-auto md:w-auto lg:w-auto xl:w-auto "
              />
              <Flex className=" flex-col justify-between ">
                <Images src={playstoreicon} alt="googleplaystore_icon" />
                <Images src={appstoreicon} alt="appstore_icon" />
              </Flex>
            </Flex>
            <List className="flex justify-center lg:justify-start xl:justify-start items-center gap-[24px] mt-[24px] ">
              <ListItems>
                <RiFacebookLine className=" text-white text-[24px] " />
              </ListItems>
              <ListItems>
                <CiTwitter className=" text-white text-[24px] " />
              </ListItems>
              <ListItems>
                <CiInstagram className=" text-white text-[24px] " />
              </ListItems>
              <ListItems>
                <RiLinkedinLine className=" text-white text-[24px] " />
              </ListItems>
            </List>
          </div>
        </Flex>
        <h3 className=" text-[#3d3d3d] pt-[16px] pb-[24px] text-center ">
          Copyright Rimel 2022. All right reserved
        </h3>
      </Container>
    </footer>
  );
};

export default Footer;
