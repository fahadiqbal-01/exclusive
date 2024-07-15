import React from "react";
import Title2 from "./Title2";
import Images from "./Images";
import google_icon from "../images/google.png";
import { Link } from "react-router-dom";

const SignUpInputs = ({ className }) => {
  return (
    <div className={className}>
      <Title2 title="Create an account" subtitle="Enter your details below" />
      <div className=" flex flex-col mt-[48px]">
        <input
          type="text"
          placeholder="Name"
          className=" focus:outline-none placeholder:text-[16px] placeholder:font-normal placeholder:font-poppins placeholder:leading-[24px] placeholder:text-[#7D8184] pb-[8px] capitalize border-b-[1px] border-[#7D8184] mb-[40px] "
        />
        <input
          type="email"
          placeholder="Email or Phone Number"
          className=" focus:outline-none placeholder:text-[16px] placeholder:font-normal placeholder:font-poppins placeholder:leading-[24px] placeholder:text-[#7D8184] pb-[8px] capitalize border-b-[1px] border-[#7D8184] mb-[40px] "
        />
        <input
          type="password"
          placeholder="Password"
          className=" focus:outline-none placeholder:text-[16px] placeholder:font-normal placeholder:font-poppins placeholder:leading-[24px] placeholder:text-[#7D8184] pb-[8px] capitalize border-b-[1px] border-[#7D8184] mb-[40px] "
        />
      </div>
      <button className=" text-[16px] font-poppins font-medium leading-[24px] text-white px-[122px] py-[16px] bg-[#DB4444] rounded-[4px] ">
        Create Account
      </button>{" "}
      <br />
      <button className=" flex items-center justify-center gap-[16px] text-[16px] font-normal leading-[24px] text-black font-poppins px-[86px] py-[16px] border-[1px] border-[#7D8184] rounded-[4px] mt-[16px]  ">
        <Images src={google_icon} alt="google_icon" /> Sign up with Google
      </button>
      <div className=" text-[16px] font-poppins font-normal leading-[24px] text-black mt-[32px] flex items-center justify-center ">Already have account? <Link to="/SignIn" className=" font-medium pb-[4px] border-b-[1px] border-[#7D8184] ml-[16px] ">Log in</Link></div>
    </div>
  );
};

export default SignUpInputs;
