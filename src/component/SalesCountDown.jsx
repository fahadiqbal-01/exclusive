import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import colon from "../images/colon.png";
import Images from "./Images";
import { countDownDateAndTime } from "countdown-date-time";

const SalesCountDown = () => {
  let [count, setCount] = useState({});

  const conduct_date = "2024-07-25 16:54:00";

  useEffect(() => {
    const countDown = countDownDateAndTime(conduct_date);
    setCount(countDown);
  }, []);

  return (
    <Flex className="mt-[10px] xl:mt-[35px] items-center gap-[17px] ">
      <div>
        <h4 className="text-[12px] font-medium leading-[18px] text-black font-poppins ">
          Days
        </h4>
        <h2 className=" text-[26px] xl:text-[32px] font-bold leading-[30px] tracking-[4%] text-black font-inter ">
          {count.days}
        </h2>
      </div>
      <Images
        src={colon}
        alt="colon-image"
        className=" w-[4px] h-[16px] mt-[12px] "
      />
      <div>
        <h4 className="text-[12px] font-medium leading-[18px] text-black font-poppins ">
          Hours
        </h4>
        <h2 className=" text-[26px] xl:text-[32px] font-bold leading-[30px] tracking-[4%] text-black font-inter ">
          {count.hours}
        </h2>
      </div>
      <Images
        src={colon}
        alt="colon-image"
        className=" w-[4px] h-[16px] mt-[12px] "
      />
      <div>
        <h4 className="text-[12px] font-medium leading-[18px] text-black font-poppins ">
          Minutes
        </h4>
        <h2 className=" text-[26px] xl:text-[32px] font-bold leading-[30px] tracking-[4%] text-black font-inter ">
          {count.minutes}
        </h2>
      </div>
      <Images
        src={colon}
        alt="colon-image"
        className=" w-[4px] h-[16px] mt-[12px] "
      />
      <div>
        <h4 className="text-[12px] font-medium leading-[18px] text-black font-poppins ">
          Seconds
        </h4>
        <h2 className=" text-[26px] xl:text-[32px] font-bold leading-[30px] tracking-[4%] text-black font-inter ">
          {count.seconds}
        </h2>
      </div>
    </Flex>
  );
};

export default SalesCountDown;
