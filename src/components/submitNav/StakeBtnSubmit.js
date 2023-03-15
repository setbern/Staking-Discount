import React from 'react';
import { useAppState } from "../../state";
import { listCV, uintCV } from "@stacks/transactions";
import { StacksMainnet } from "@stacks/network";
import { AnchorMode, PostConditionMode } from "@stacks/transactions";
import { openContractCall } from "@stacks/connect";

const contractAddress = "SP3D03X5BHMNSAAW71NN7BQRMV4DW2G4JB3MZAGJ8"
const contractName = "staking-discount-quick-testing-3"
const handleSuccesModel = ""

function StakeBtnSubmit() {
  const { selectedItems, _selectedItems, senderAddress } = useAppState();
  const btcBadgersItems = selectedItems.filter((item) => item.asset_id === "btc-badgers-nft-v2");
  const babyBadgersItems = selectedItems.filter((item) => item.asset_id === "baby-badgers");

  const btcBadgersTokenIds = btcBadgersItems.map((item) => uintCV(parseInt(item.token_id)));
  const babyBadgersTokenIds = babyBadgersItems.map((item) => uintCV(parseInt(item.token_id)));
  console.log(btcBadgersItems)

const args = [listCV(btcBadgersTokenIds), listCV(babyBadgersTokenIds)];

  const handleStake = async () => {
    try {
      const args = [listCV(babyBadgersTokenIds), listCV(btcBadgersTokenIds)];

      const txOptions = {
        contractAddress: contractAddress,
        contractName: contractName,
        functionName: "stake-for-discount",
        functionArgs : args,
        senderKey: senderAddress,
        validateWithAbi: true,
        network: new StacksMainnet(),
        postConditions: [],
        anchorMode: AnchorMode.Any,
        postConditionMode: PostConditionMode.Allow,
        onFinish: (data) => {
          
          return;
        },
        onCancel: () => {
          console.log("TX was cancelled");
        },
      };

      const transaction = await openContractCall(txOptions);
    } catch (err) {
      console.log("handleStake", err);
    }
  };

  return (
    <button className="border rounded-full h-[48px] w-[145px] bg-[#5446F4] text-white font-bold mt-1" onClick={handleStake}>
      <div className="flex items-center justify-center">
      <div className="flex items-center justify-center rounded-full bg-[#9C95F8] w-[24px] h-[24px]">
          <img src="./images/Vector.png" />
        </div>
        <span className="ml-2 text-2xl mb-1">stake</span>
      </div>
    </button>
  );
}

export default StakeBtnSubmit;