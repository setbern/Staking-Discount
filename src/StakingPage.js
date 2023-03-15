import React, { useState } from "react";
import "./App.css";
import BadgerNfts from "./components/BadgerMenu";
import NavTop from "./components/NavTop";
import { useAppState } from "./state";
import { stakeRequierements } from "./components/stakeRequirementes";
import Paragraph from "./components/paragraph";
import ParagraphStakeOver from "./components/stakedBeforeNav/paragraphStakeOver";

function Staking() {
  const { fetchWalletRes, selectedItems, _selectedItems, listBabyBadgerState, listBadgerState, userStaked, senderAddress } = useAppState();
  console.log(selectedItems)

  const gatewayUrl = "https://ipfs.io/ipfs/";

  const handleItemClick = (item) => {
    const index = selectedItems.findIndex((i) => i.token_id === item.token_id);
    const numSelected = selectedItems.length;
  
    if (index === -1) {
      if (numSelected < stakeRequierements) {
        _selectedItems([...selectedItems, item]);
      }
    } else {
      _selectedItems(selectedItems.filter((i) => i.token_id !== item.token_id));
    }
  };

  const walletItems = fetchWalletRes.map((item, index) => {
    const imageUrl = item.token_metadata.image_url.replace("ipfs://", gatewayUrl);

    const isSelected = selectedItems.some((i) => i.token_id === item.token_id);

    return (
      <div
        key={index}
        className="relative mr-4 mb-4 h-[257px]"
        onClick={() => handleItemClick(item)}
      >
         <img src={imageUrl} alt={item.token_id} className={`h-full w-full object-cover rounded-lg transition-all duration-300 hover:scale-110 ${isSelected ? "selected" : ""}`} />
        {isSelected && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full bg-[#190ADB] flex items-center justify-center">
            <img src="./images/VectorCheckMark.png"></img>
          </div>
        )}
      </div>
    );
  });

  return (
    <>
      <NavTop />
      <div className="mt-[64px] ml-[64px] mr-[64px] md:ml-[111px] md:mr-[111px]">
      {listBabyBadgerState.length === 0 && listBadgerState.length === 0 && userStaked ? (
          <ParagraphStakeOver />
        ) : (
          <Paragraph />
        )}
      </div>
      <BadgerNfts />
      {fetchWalletRes.length > 0 ? (
        <div className="flex flex-wrap max-w-full mx-auto justify-center mt-8 ml-[50px] mr-[50px]">{walletItems}</div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full mt-[100px]">
        <p className="text-[40px] font-bold">No Badgers to display</p>
        </div>
      )}
    </>
  );
}

export default Staking;
