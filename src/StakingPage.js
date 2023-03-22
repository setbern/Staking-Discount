import React, { useState } from "react";
import "./App.css";
import BadgerNfts from "./components/BadgerMenu";
import NavTop from "./components/NavTop";
import { useAppState } from "./state";
import { stakeRequierements } from "./components/stakeRequirementes";
import Paragraph from "./components/paragraph";
import ParagraphStakeOver from "./components/stakedBeforeNav/paragraphStakeOver";
import ParagraphStaked from "./components/unstakeNav/paragraphStaked";
import ParagraphTxSubmitted from "./components/TxSubmitted/paragraphTxSubmitted";

function Staking() {

  const { fetchWalletRes, selectedItems, _selectedItems, listBabyBadgerState, listBadgerState, userStaked, senderAddress, badgers, babyBadgers, mempool } = useAppState();
  console.log(selectedItems)
  console.log("WalletRes", fetchWalletRes)
  const btcBadgersItems = fetchWalletRes.filter((item) => item.asset_id === "btc-badgers-nft-v2");
  console.log("badgers", btcBadgersItems)
  const babyBadgersItems = fetchWalletRes.filter((item) => item.asset_id === "baby-badgers");
  console.log("baby badgers", babyBadgersItems)



  const gatewayUrl = "https://ipfs.io/ipfs/";

  const handleItemClick = (item) => {
    const index = selectedItems.findIndex((i) => i.token_id === item.token_id);
    const numSelected = selectedItems.length;
    console.log("userStaked", userStaked);
    console.log("item", item);
    if (!userStaked) {
      if (index === -1) {
        if (numSelected < stakeRequierements) {
          _selectedItems([...selectedItems, item]);
        }
      } else {
        _selectedItems(
          selectedItems.filter((i) => i.token_id !== item.token_id)
        );
      }
    }
  };

  const walletBadgerItems = btcBadgersItems.map((item, index) => {
    const imageUrl = item.token_metadata.image_url.replace(
      "ipfs://",
      gatewayUrl
    );
    console.log(imageUrl);

    const isSelected =
      !userStaked && selectedItems.some((i) => i.token_id === item.token_id);
    return (
      <div
        key={index}
        className="relative mr-4 mb-4 h-[257px]"
        onClick={() => handleItemClick(item)}
      >
        <img
          src={imageUrl}
          alt={item.token_id}
          className={`h-full w-full object-cover rounded-lg transition-all duration-300 hover:scale-110 ${
            isSelected ? "selected" : ""
          }`}
        />
        {isSelected && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full bg-[#190ADB] flex items-center justify-center">
            <img src="./images/VectorCheckMark.png"></img>
          </div>
        )}
      </div>
    );
  });

  const walletBabyBadgerItems = babyBadgersItems.map((item, index) => {
    const imageUrl = item.token_metadata.image_url.replace(
      "ipfs://",
      gatewayUrl
    );
    console.log(imageUrl);

    const isSelected =
      !userStaked && selectedItems.some((i) => i.token_id === item.token_id);

    return (
      <div
        key={index}
        className="relative mr-4 mb-4 h-[257px]"
        onClick={() => handleItemClick(item)}
      >
        <img
          src={imageUrl}
          alt={item.token_id}
          className={`h-full w-full object-cover rounded-lg transition-all duration-300 hover:scale-110 ${
            isSelected ? "selected" : ""
          }`}
        />
        {isSelected && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full bg-[#190ADB] flex items-center justify-center">
            <img src="./images/VectorCheckMark.png"></img>
          </div>
        )}
      </div>
    );
  });

  const mapItemsBadgers = listBadgerState.map((item, index) => {
    const imageBadger = item.value;
    const imageUrlBadger = `https://ipfs.io/ipfs/QmWtLcsypXdSkZcqXJSjozFRvvK3Q3Hp5qBBLyuEBohtJ2/bitcoin_badger_${imageBadger}.gif`;
    console.log("This is it", imageBadger);
    console.log("This is it the URL", imageUrlBadger);

    return (
      <div
        key={index}
        className="relative mr-4 mb-4 h-[257px]"
        onClick={() => handleItemClick(item)}
      >
        <img
          src={imageUrlBadger}
          alt={item.value}
          className="h-full w-full object-cover rounded-lg transition-all duration-300 opacity-70"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full bg-slate-700 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
      </div>
    );
  });

  const mapItemsBabyBadgers = listBabyBadgerState.map((item, index) => {
    const imageBabyBadger = item.value;
    const imageUrlBabyBadger = `https://ipfs.io/ipfs/QmQbyehKTTczgB7n7GwVcLir9tmtRKEtrag3M8FEcKhvTT/baby_badger_${imageBabyBadger}.gif`;
    console.log("This is it baby", imageBabyBadger);
    console.log("This is it the URL baby", imageUrlBabyBadger);

    return (
      <div
        key={index}
        className="relative mr-4 mb-4 h-[257px]"
        onClick={() => handleItemClick(item)}
      >
        <img
          src={imageUrlBabyBadger}
          alt={item.value}
          className="h-full w-full object-cover rounded-lg transition-all duration-300 opacity-70"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full bg-[#190ADB] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <>
      <NavTop />
      <div className="mt-[64px] ml-[64px] mr-[64px] md:ml-[111px] md:mr-[111px]">
        {listBabyBadgerState.length === 0 &&
        listBadgerState.length === 0 &&
        userStaked ? (
          <ParagraphStakeOver />
        ) : listBabyBadgerState.length >= 1 ||
          (listBadgerState.length >= 1 && userStaked) ? (
          <ParagraphStaked />
        ) : mempool === "0" ? ( 
          <ParagraphTxSubmitted />
        ) : ( 
          <Paragraph />
        ) }
      </div>
      <BadgerNfts />
      {fetchWalletRes.length > 0 ||
      listBadgerState.length > 0 ||
      listBabyBadgerState.length > 0 ? (
        <>
          {badgers && !babyBadgers && (
            <>
              <div className="flex flex-wrap max-w-full mx-auto justify-center mt-10 ml-[50px] mr-[50px]">
                {mapItemsBadgers}
              </div>
              <div className="flex flex-wrap max-w-full mx-auto justify-center mt-10 ml-[50px] mr-[50px]">
                {walletBadgerItems}
              </div>
            </>
          )}
          {!badgers && babyBadgers && (
            <>
              <div className="flex flex-wrap max-w-full mx-auto justify-center mt-10 ml-[50px] mr-[50px]">
                {mapItemsBabyBadgers}
              </div>
              <div className="flex flex-wrap max-w-full mx-auto justify-center mt-10 ml-[50px] mr-[50px]">
                {walletBabyBadgerItems}
              </div>
            </>
          )}
          {!badgers && !babyBadgers && (
            <>
              <div className="flex flex-wrap max-w-full mx-auto justify-center mt-10 ml-[50px] mr-[50px]">
                {mapItemsBadgers}
              </div>
              <div className="flex flex-wrap max-w-full mx-auto justify-center mt-10 ml-[50px] mr-[50px]">
                {mapItemsBabyBadgers}
              </div>
              <div className="flex flex-wrap max-w-full mx-auto justify-center mt-10 ml-[50px] mr-[50px]">
                {walletBadgerItems}
              </div>
              <div className="flex flex-wrap max-w-full mx-auto justify-center mt-10 ml-[50px] mr-[50px]">
                {walletBabyBadgerItems}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full mt-[100px]">
          <p className="text-[20px] md:text-[40px] font-bold">
            No Badgers to display
          </p>
        </div>
      )}
    </>
  );
}

export default Staking;
