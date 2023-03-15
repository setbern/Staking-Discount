import React from "react";
import NavBottom from "../NavBottom";
import UnStakeBtn from "./UnStakeBtn";
import { useAppState } from "../../state";

function NavInfo() {
  const { timeToUnstake } = useAppState();
  const blocksLeft = Number(timeToUnstake);

  let displayBlocksLeft = blocksLeft;
  if (blocksLeft === 103) {
    displayBlocksLeft = 0;
  }

    return (
        <><div className="flex flex-col items-center justify-center w-full mt-[100px]">
        <h1 className="text-[40px] font-bold">
          <span className="text-[#EA993E]">{displayBlocksLeft}</span> Blocks left...
        </h1>
        <UnStakeBtn />
      </div>
      <div>
          <NavBottom className="" />
        </div></>
    )
}

export default NavInfo;