import React, { useState } from "react";
import { useAppState } from "../../state";
import { StacksMainnet } from "@stacks/network";
import { openContractCall } from "@stacks/connect";

import { GraphQLClient, gql } from "graphql-request";

import {
  FungibleConditionCode,
  AnchorMode,
  makeStandardSTXPostCondition,
  uintCV,
  PostCondition,
  listCV,
  makeStandardNonFungiblePostCondition,
  NonFungibleConditionCode,
  createAssetInfo,
  PostConditionMode,
} from "@stacks/transactions";

const contractAddress = "SP3D03X5BHMNSAAW71NN7BQRMV4DW2G4JB3MZAGJ8";
const contractName = "badgers-staking-discount";
const handleSuccesModel = "";

function StakeBtnSubmit() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const [err, setErr] = useState(false);

  const { selectedItems, _selectedItems, senderAddress } = useAppState();

  const postConditionCode = 16;

  const badgersAssetInfo = createAssetInfo(
    "SP27F9EJH20K3GT6GHZG0RD08REZKY2TDMD6D9M2Z",
    "btc-badgers-v2",
    "btc-badgers-nft-v2"
  );

  const babyBadgersAssetInfo = createAssetInfo(
    "SP27F9EJH20K3GT6GHZG0RD08REZKY2TDMD6D9M2Z",
    "baby-badgers",
    "baby-badgers"
  );

  const btcBadgersItems = selectedItems.filter(
    (item) => item.asset_id === "btc-badgers-nft-v2"
  );

  const btcBadgersTokenIds = btcBadgersItems.map((item) =>
    uintCV(parseInt(item.token_id))
  );

  const badgerStakePC = btcBadgersTokenIds.map((d, i) => {
    return makeStandardNonFungiblePostCondition(
      senderAddress,
      postConditionCode,
      badgersAssetInfo,
      d
    );
  });

  const babyBadgersItems = selectedItems.filter(
    (item) => item.asset_id === "baby-badgers"
  );

  const babyBadgersTokenIds = babyBadgersItems.map((item) =>
    uintCV(parseInt(item.token_id))
  );

  const bayBadegersPC = babyBadgersTokenIds.map((d, i) => {
    return makeStandardNonFungiblePostCondition(
      senderAddress,
      postConditionCode,
      babyBadgersAssetInfo,
      d
    );
  });

  console.log(btcBadgersItems);

  const pc = [...badgerStakePC, ...bayBadegersPC];
  console.log("pc", pc);
  const handleStake = async () => {
    try {
      if (validateEmail(email)) {
        console.log("Email is valid:", email);
        setIsValid(true);
        setErr(false);
        const args = [listCV(babyBadgersTokenIds), listCV(btcBadgersTokenIds)];

        const txOptions = {
          contractAddress: contractAddress,
          contractName: contractName,
          functionName: "stake-for-discount",
          functionArgs: args,
          senderKey: senderAddress,
          validateWithAbi: true,
          network: new StacksMainnet(),

          anchorMode: AnchorMode.Any,
          postConditions: pc,
          onFinish: (data) => {
            handleAddEmail(data.txId, email);
            return;
          },
          onCancel: () => {
            console.log("TX was cancelled");
          },
        };

        const transaction = await openContractCall(txOptions);

        // perform any necessary actions with valid email
      } else {
        setIsValid(false);
        setErr("Please enter a valid email address");

        return;
      }
    } catch (err) {
      console.log("handleStake", err);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleAddEmail = async (senderAddress = "", email = "") => {
    try {
      const endpoint = "https://protected-oasis-02113.herokuapp.com/graphql";

      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: "",
        },
      });

      const query = gql`
        {
          stakingDiscount(txId: "${senderAddress}", email: "${email}") 
        }
      `;

      const data = await graphQLClient.request(query);
      console.log(" handleAddEmail data", data);
      if (data.handleAnonCli) {
        if (data.handleAnonCli === "False") {
          window.alert("ERR_PLZ_REPORT_TO_MONEKY_DEV");
        } else {
        }
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="flex flex-col  p-2 relative">
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          placeholder="test@test.com"
          className="border border-purple-600 rounded-full py-1 text-center font-bold text-black mb-1.5 mt-4"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="m-auto">
        <button
          className="border rounded-full h-[48px] w-[145px] bg-[#5446F4] text-white font-bold mt-1"
          onClick={() => handleStake()}
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full bg-[#9C95F8] w-[24px] h-[24px]">
              <img src="./images/Vector.png" />
            </div>
            <span className="ml-2 text-2xl mb-1">stake</span>
          </div>
        </button>
      </div>
      {(err || !isValid) && (
        <span className="absolute z-10 bottom-[-30px] text-red-500 w-80  text-sm  text-center">
          {err}
        </span>
      )}
    </div>
  );
}

export default StakeBtnSubmit;
