import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import { countDownDateAndTime } from "countdown-date-time";

const CategoryThirdSalesCountDown = () => {
    let [count, setCount] = useState({});

    const conduct_date = "2024-07-25 16:54:00";
  
    useEffect(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown);
    }, []);

  return (
    <Flex className="flex justify-center gap-[24px] items-center">
      <div className=" w-[62px] h-[62px] bg-primary rounded-full text-center py-[7%] ">
        <h2 className=" text-[16px] font-semibold font-poppins text-black leading-[20%] ">{count.hours}</h2>
        <h4 className="text-[11px] font-normal leading-[18px] text-black font-poppins mt-[4px]  ">Hours</h4>
      </div>
      <div className=" w-[62px] h-[62px] bg-primary rounded-full text-center py-[7%] ">
        <h2 className=" text-[16px] font-semibold font-poppins text-black leading-[20%] "> {count.days}</h2>
        <h4 className="text-[11px] font-normal leading-[18px] text-black font-poppins mt-[4px]  ">Days</h4>
      </div>
      <div className=" w-[62px] h-[62px] bg-primary rounded-full text-center py-[7%] ">
        <h2 className=" text-[16px] font-semibold font-poppins text-black leading-[20%] "> {count.minutes}</h2>
        <h4 className="text-[11px] font-normal leading-[18px] text-black font-poppins mt-[4px]  ">Minutes</h4>
      </div>
      <div className=" w-[62px] h-[62px] bg-primary rounded-full text-center py-[7%] ">
        <h2 className=" text-[16px] font-semibold font-poppins text-black leading-[20%] ">{count.seconds}</h2>
        <h4 className="text-[11px] font-normal leading-[18px] text-black font-poppins mt-[4px]  ">Seconds</h4>
      </div>
    </Flex>
  );
};

export default CategoryThirdSalesCountDown;
