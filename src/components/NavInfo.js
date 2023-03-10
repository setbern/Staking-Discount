import React from "react";
import StakeBtn from "./StakeBtn";
import NavBottom from "./NavBottom";

function NavInfo() {
    return (
        <><div className="flex flex-col items-center justify-center w-full mt-[100px]">
        <h1 className="text-[40px] font-bold">
          Select <span className="text-[#EA993E]">1</span> Badgers
        </h1>
        <StakeBtn />
      </div><div>
          <NavBottom />
        </div></>
    )
}

export default NavInfo;