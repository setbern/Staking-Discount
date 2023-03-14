import React from "react";
import ConnectWalletBtn from "./ConnectWalletBtn";
import LeftTopTitle from "./LeftTopTitle";
import NavInfoSubmit from "./submitNav/NavInfoSubmit";
import NavInfoDaysLeft from "./unstakeNav/NavInfoDaysLeft";
import NavInfo from "./NavInfo";
import NavInfoStakeOver from "./unstakeSubmitNav/NavInfoStakeOver"
import { useAppState } from "../state";
import { stakeRequierements } from "./stakeRequirementes";

function NavTop() {
  const { selectedItems } = useAppState();

  let navInfoComponent = <NavInfo />;

  if (selectedItems.length === stakeRequierements) {
    navInfoComponent = <NavInfoSubmit />;
  }

  return (
    <div className="flex flex-col w-full h-96 bg-gradient-br-tl">
      <div className="flex flex-row items-center justify-between mt-[26px] ml-[36px] md:mt-[52px] md:ml-[73px] ">
        <LeftTopTitle />
        <div>
          <ConnectWalletBtn />
        </div>
      </div>
      {/* {navInfoComponent} */}
      <NavInfoStakeOver />
    </div>
  );
}

export default NavTop;
