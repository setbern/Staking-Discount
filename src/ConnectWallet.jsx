import React, { useState, useEffect } from 'react';
import { useAppState } from './state';
import { toast } from 'react-toastify';
import { Connect } from '@stacks/connect-react';
import { AppConfig, UserSession } from '@stacks/connect';
import { fetchWalletHoldingV2 } from './components/FetchBadgers';
import { StacksMainnet } from "@stacks/network";
import { callReadOnlyFunction, tupleCV, cvToString } from "@stacks/transactions";
import { principalCV, cvToJSON, contractPrincipalCV } from '@stacks/transactions';

export const STX_API = "https://stacks-node-api.mainnet.stacks.co/";


const STACK_CLIENT_CONFIG = new AppConfig(['store_write', 'publish_data']);
const STACKS_USER_SESSION = new UserSession({
  appConfig: STACK_CLIENT_CONFIG,
});

const ConnectWallet = ({ children }) => {
  const { _authenticated, _senderAddress, _fetchWalletRes, fetchWalletRes, _userStaked, userStaked, timeToUnstake, _timeToUnstake, _listBadgerState, _listBabyBadgerState, mempool, _mempool } = useAppState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const senderAddy = localStorage.getItem("principal");

    console.log("senderAddy", senderAddy);
    
    if (senderAddy) {
      funcToRun(senderAddy);
      _authenticated(true);
      _senderAddress(senderAddy);
      getMap(senderAddy);
      getTimeToUnstake(senderAddy);
      fetchWalletTransaction(senderAddy);
      
    }
  }, []);

  const fetchWalletTransaction = async (senderAddress) => {
    if (senderAddress === null) {
      throw new Error('No wallet address provided');
    }
    try {
      const transactionAPI = `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${senderAddress}/mempool`;
      console.log("transaction URL", transactionAPI);
  
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
      console.log("transaction data", transactionFetch);
  
      // Find a transaction with the specified contract_id and function_name
      const targetTransaction = transactionFetch.results.find(tx => {
        return tx.contract_call.contract_id === "SP3D03X5BHMNSAAW71NN7BQRMV4DW2G4JB3MZAGJ8.staking-discount-quick-testing-3"
          && tx.contract_call.function_name === "stake-for-discount";
      });
  
      if (targetTransaction) {
        const txStatus = targetTransaction.tx_status;
        console.log("Transaction status:", txStatus);

        if (txStatus === 'pending') {
          _mempool("0");
        }
        
      } else {
        console.log("No matching transaction found");
      }

      console.log("mempool Status:", mempool);
  
      return transactionFetch;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  const funcToRun = async (senderAddy) => {
  const fetchWalletRes = await fetchWalletHoldingV2(senderAddy);
  
  if (fetchWalletRes) {
    _fetchWalletRes(fetchWalletRes);
  }
};

const getMap = async (senderAddy) => {
  const network = new StacksMainnet();
  const contractAddress = 'SP3D03X5BHMNSAAW71NN7BQRMV4DW2G4JB3MZAGJ8';
  const contractName = 'staking-discount-quick-testing-3';
  const functionName = 'get-staked-by-user';
  const functionArgs = [principalCV(senderAddy)];
  const senderAddress = senderAddy;

  const options = {
    contractAddress,
    contractName,
    functionName,
    functionArgs,
    network,
    senderAddress,
  };

  const response = await callReadOnlyFunction(options);
  console.log('Raw response:', response);
  const jsonResponse = cvToJSON(response);
  console.log("json", jsonResponse)
  const isStaked = jsonResponse.value.value.staked.value;
  _userStaked(isStaked)
  const listBadgers = jsonResponse.value.value["staked-badger"].value
  _listBadgerState(listBadgers)
  const listBabyBadgers = jsonResponse.value.value["staked-baby"].value
  _listBabyBadgerState(listBabyBadgers)
  const listBabyBadgersUints = jsonResponse.value.valuew

  
};


const getTimeToUnstake = async (senderAddy) => {
  const network = new StacksMainnet();
  const contractAddress = 'SP3D03X5BHMNSAAW71NN7BQRMV4DW2G4JB3MZAGJ8';
  const contractName = 'staking-discount-quick-testing-3';
  const functionName = 'get-time-remaining-to-unstake';
  const functionArgs = [principalCV(senderAddy)];
  const senderAddress = senderAddy;
  const cpCV = contractPrincipalCV(contractAddress, contractName)

  const options = {
    contractAddress,
    contractName,
    functionName,
    functionArgs,
    network,
    senderAddress,
  };

  try {
    const resultTime = await callReadOnlyFunction(options);
    console.log(resultTime);

    if (resultTime) {
      const timeToUnstake = resultTime.value.value;
      console.log("Time to Unstake", timeToUnstake)
      _timeToUnstake(timeToUnstake)
    }

  } catch (error) {
    console.error(error);
  }
};

  const authOptions = {
    appDetails: {
      name: 'Staking-Badgers',
      icon: 'https://cdn.discordapp.com/attachments/894667598799724575/942497324855357501/Cupid2x.png',
    },
    username: 'test',
    redirectTo: '/',
    onFinish: async () => {
      try {
        setLoading(true);
        let userData = STACKS_USER_SESSION.loadUserData();
  
        console.log('userData', userData);
        const senderAddress = userData.profile.stxAddress.mainnet;
        console.log('senderAddress', senderAddress);
        _authenticated(true);
        _senderAddress(senderAddress);
  
        setLoading(false);
  
        localStorage.setItem('principal', senderAddress);
        funcToRun(senderAddress);
        getMap(senderAddress);
        getTimeToUnstake(senderAddress);
        fetchWalletTransaction(senderAddress);

      } catch (err) {
        toast.error('Could Not Authenticate');
        setLoading(false);
      }
    },
    userSession: STACKS_USER_SESSION,
  };
  

  return <Connect authOptions={authOptions}>{children}</Connect>;
};

export const senderAddy = localStorage.getItem('principal');

export default ConnectWallet;
