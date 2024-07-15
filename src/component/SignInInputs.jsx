import React from "react";
import Title2 from "./Title2";
import { Link } from "react-router-dom";

const SignInInputs = ({className}) => {
  return (
    <div className={className}>
      <Title2 title="Log in to Exclusive" subtitle="Enter your details below" />
      <div className=" flex flex-col mt-[48px] ">
      <input
          type="text"
          placeholder="Email or Phone Number"
          className=" focus:outline-none placeholder:text-[16px] placeholder:font-normal placeholder:font-poppins placeholder:leading-[24px] placeholder:text-[#7D8184] pb-[8px] capitalize border-b-[1px] border-[#7D8184] mb-[40px] "
        />
          <input
          type="password"
          placeholder="Password"
          className=" focus:outline-none placeholder:text-[16px] placeholder:font-normal placeholder:font-poppins placeholder:leading-[24px] placeholder:text-[#7D8184] pb-[8px] capitalize border-b-[1px] border-[#7D8184] mb-[40px] "
        />
      </div>
      <div className=" flex justify-between items-center ">
        <button className=" text-[16px] font-medium font-poppins leading-[24px] text-white px-[48px] py-[16px] rounded-[4px] bg-orange ">Log In</button>
        <Link className="text-[16px] font-medium font-poppins leading-[24px] text-orange ">Forget Password?</Link>
      </div>
    </div>
  );
};

export default SignInInputs;
