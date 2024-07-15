import React from "react";

const Title = ({ subtitle, title }) => {
  return (
    <div className=" gap-12 xl:gap-0 items-center xl:items-start flex-col ">
      <h4
        className='text-[16px] font-semibold leading-[20px] ml-[36px] text-orange font-poppins
         before:content-[""] before:h-[40px] before:w-[20px] before:bg-orange before:rounded-[4px]
          before:absolute before:left-[-36px] before:top-[50%] before:transform before:translate-y-[-50%] relative '
      >
        {subtitle}
      </h4>
      <h2 className=" text-[26px] lg:text-[36px] font-inter font-semibold leading-[48px] tracking-[4%] text-black mt-2 xl:mt-[24px] ">
        {title}
      </h2>
    </div>
  );
};

export default Title;
