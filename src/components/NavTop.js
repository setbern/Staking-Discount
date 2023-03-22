import React from "react";
import ConnectWalletBtn from "./ConnectWalletBtn";
import LeftTopTitle from "./LeftTopTitle";
import NavInfoSubmit from "./submitNav/NavInfoSubmit";
import NavInfoDaysLeft from "./unstakeNav/NavInfoDaysLeft";
import NavInfo from "./NavInfo";
import NavInfoStakeOver from "./unstakeSubmitNav/NavInfoStakeOver";
import { useAppState } from "../state";
import { stakeRequierements } from "./stakeRequirementes";
import StakedBefore from "./stakedBeforeNav/StakedBefore";
import { senderAddy } from "../ConnectWallet";
import TxSubmitted from "./TxSubmitted/TxSubmitted";


function NavTop() {
  const { selectedItems, userStaked, timeToUnstake, senderAddress, listBabyBadgerState, listBadgerState, mempool } = useAppState();
  console.log("userStaked:", userStaked);
  console.log("timeToUnstake:", timeToUnstake);
  console.log("BabyBadgerState:", listBabyBadgerState)
  console.log("BadgerState:", listBadgerState)
  console.log("Mempool status in nav top", mempool)

  let navInfoComponent;

  if (listBabyBadgerState.length === 0 && listBadgerState.length === 0 && (userStaked)) {
    navInfoComponent = <StakedBefore />;
  } else if (mempool === "0") {
    navInfoComponent = <TxSubmitted />;
  } else if (senderAddress === null) {
    navInfoComponent = <NavInfo />;
  } else if (Number(timeToUnstake) > 0 && Number(timeToUnstake) !== 103 && Number(timeToUnstake) !== 105) {
    navInfoComponent = <NavInfoDaysLeft />;
  } else if (selectedItems.length === stakeRequierements) {
    navInfoComponent = <NavInfoSubmit />;
  } else if (!userStaked) {
    navInfoComponent = <NavInfo />;
  } else if (userStaked) {
    navInfoComponent = <NavInfoStakeOver />;
  } 

  return (
    <div className="flex flex-col w-full h-96 bg-gradient-br-tl">
      <div className="flex flex-row items-center justify-between mt-[26px] ml-[36px] md:mt-[52px] md:ml-[73px] ">
        <LeftTopTitle />
        <div>
          <ConnectWalletBtn />
        </div>
      </div>
      {navInfoComponent}
      {/* <NavInfo /> */}
      {/* <NavInfoSubmit /> */}
      {/* <NavInfoDaysLeft /> */}
      {/* <StakedBefore /> */}
      {/* <NavInfoStakeOver /> */}
    </div>
  );
}

export default NavTop;
