import React, { useState } from "react";

const SIze = ({ sizes, onClick }) => {
  let [select, setSelect] = useState(false);

  let handleSelect = () => {
    setSelect(!select);
  };

  return (
    <div
      onClick={handleSelect}
      className={`${select ? "bg-orange" : "bg-transparent"} flex items-center justify-center h-[32px] w-[32px] rounded-[4px] border-[1px] border-[#808080] text-[14px] cursor-pointer
     font-medium leading-[21px] text-black font-poppins px-[12px] py-[6px] `}
    >
      {sizes}
    </div>
  );
};

export default SIze;
