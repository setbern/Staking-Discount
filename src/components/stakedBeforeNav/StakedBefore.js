import React from "react";
import NavBottom from "../NavBottom";

function StakedBefore() {
    return (
        <><div className="flex flex-col items-center justify-center w-full mt-[130px] md:mt-[100px]">
        <h1 className="md:text-[40px] font-bold text-[#5446F4] underline text-[20px]">
         You've Already Claimed A Discount!
        </h1>
      </div>
      <div className="mt-[52px]">
          <NavBottom />
        </div></>
    )
}

export default StakedBefore;