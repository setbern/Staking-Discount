import React from "react";
import UnStakeBtnSubmit from "./UnStakeBtnSubmit";
import NavBottom from "../NavBottom";

function NavInfo() {
    return (
        <><div className="flex flex-col items-center justify-center w-full mt-[100px]">
        <h1 className="text-[40px] font-bold">
          <span className="text-[#EA993E]"></span> Stake Period Over!
        </h1>
        <UnStakeBtnSubmit />
      </div>
      <div>
          <NavBottom />
        </div></>
    )
}

export default NavInfo;