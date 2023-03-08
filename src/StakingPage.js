import React, { useState } from "react";
import "./App.css";
import BadgerNfts from "./components/BadgerMenu";
import NavTop from "./components/NavTop";
import { useAppState } from "./state";

function Staking() {
  const { fetchWalletRes } = useAppState();

  const gatewayUrl = "https://ipfs.io/ipfs/";

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    const index = selectedItems.findIndex((i) => i.token_id === item.token_id);

    if (index === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((i) => i.token_id !== item.token_id));
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
        <img src={imageUrl} alt={item.token_id} className="h-full w-full object-cover rounded-lg transition-all duration-300 hover:scale-110" />
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
        <p className="text-center text-sm md:text-2xl">
          Stake <span className="text-[#5446F4]">11</span> Badgers here to unlock a one-time 50% discount to the 100+ Days of Clarity Course. The number of Badgers to stake is decided by the floor price & USD/STX value (updated weekly).
        </p>
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
