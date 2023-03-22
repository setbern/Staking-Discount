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


function NavTop() {
  const { selectedItems, userStaked, timeToUnstake, senderAddress, listBabyBadgerState, listBadgerState } = useAppState();
  console.log("userStaked:", userStaked);
  console.log("timeToUnstake:", timeToUnstake);
  console.log("BabyBadgerState:", listBabyBadgerState)
  console.log("BadgerState:", listBadgerState)

  const fetchWalletTransaction = async (senderAddress) => {
    if (senderAddress === null) {
      throw new Error('No wallet address provided');
    }
    try {
  
        const transactionAPI = `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${senderAddress}/transactions`;
  
        const transactionFetch = await fetch(transactionAPI)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then(data => {
          return data;
        });
  
      return transactionFetch;
      console.log("transaction JSON", transactionFetch)
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  let navInfoComponent;

  if (listBabyBadgerState.length === 0 && listBadgerState.length === 0 && (userStaked)) {
    navInfoComponent = <StakedBefore />;
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
