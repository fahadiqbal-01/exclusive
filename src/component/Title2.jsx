import React from "react";

const Title2 = ({title, subtitle}) => {
  return (
    <div>
      <h1 className=" text-[36px] font-medium leading-[30px] font-inter tracking-[4%] text-black mb-[24px] ">
        {title}
      </h1>
      <h3 className=" text-[16px] font-normal font-poppins leading-[24px] text-black ">
       {subtitle}
      </h3>
    </div>
  );
};

export default Title2;
