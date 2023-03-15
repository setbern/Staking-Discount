import React from 'react';
import { useAppState } from "../../state";
import { StacksMainnet } from "@stacks/network";
import { AnchorMode, PostConditionMode, principalCV } from "@stacks/transactions";
import { openContractCall } from "@stacks/connect";

const contractAddress = "SP3D03X5BHMNSAAW71NN7BQRMV4DW2G4JB3MZAGJ8"
const contractName = "staking-discount-quick-testing-3"
const handleSuccesModel = ""

function UnStakeBtn() {
  const { senderAddress } = useAppState();

  const handleUnStake = async () => {

    try {

      const txOptions = {
        contractAddress: contractAddress,
        contractName: contractName,
        functionName: "unstake",
        functionArgs : [],
        senderKey: senderAddress,
        validateWithAbi: true,
        network: new StacksMainnet(),
        postConditions: [],
        anchorMode: AnchorMode.Any,
        postConditionMode: PostConditionMode.Allow,
        onFinish: (data) => {
          
          console.log(txOptions)
          return;
        },
        onCancel: () => {
          console.log("TX was cancelled");
        },
      };

      const transaction = await openContractCall(txOptions);
    } catch (err) {
      console.log("handleUnStake", err);
    }
  };

  return (
    <button className="border rounded-full h-[48px] w-[145px] bg-[#5446F4] text-white font-bold mt-1" onClick={handleUnStake}>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center rounded-full bg-[#9C95F8] w-[24px] h-[24px]">
          <img src="./images/Vector.png" />
        </div>
        <span className="ml-2 text-2xl mb-1">unstake</span>
      </div>
    </button>
  );
}

export default UnStakeBtn;