import React from "react";
import NavBottom from "../NavBottom";
import UnStakeBtn from "./UnStakeBtn";

function NavInfo() {
    return (
        <><div className="flex flex-col items-center justify-center w-full mt-[100px]">
        <h1 className="text-[40px] font-bold">
          <span className="text-[#EA993E]">85</span> Days left...
        </h1>
        <UnStakeBtn />
      </div>
      <div>
          <NavBottom className="" />
        </div></>
    )
}

export default NavInfo;