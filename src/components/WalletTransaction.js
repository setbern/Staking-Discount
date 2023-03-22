// const fetchWalletTransaction = async (senderAddress) => {
//     const { _authenticated, _senderAddress, _fetchWalletRes, fetchWalletRes, _userStaked, userStaked, timeToUnstake, _timeToUnstake, _listBadgerState, _listBabyBadgerState, mempool, _mempool } = useAppState();
//     if (senderAddress === null) {
//       throw new Error('No wallet address provided');
//     }
//     try {
//       const transactionAPI = `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${senderAddress}/mempool`;
//       console.log("transaction URL", transactionAPI);
  
//       const transactionFetch = await fetch(transactionAPI)
//         .then(res => {
//           if (res.ok) {
//             return res.json();
//           }
//           throw res;
//         })
//         .then(data => {
//           return data;
//         });
//       console.log("transaction data", transactionFetch);
  
//       // Find a transaction with the specified contract_id and function_name
//       const targetTransaction = transactionFetch.results.find(tx => {
//         return tx.contract_call.contract_id === "SP3D03X5BHMNSAAW71NN7BQRMV4DW2G4JB3MZAGJ8.badgers-build-discount"
//           && tx.contract_call.function_name === "stake-for-discount";
//       });
  
//       if (targetTransaction) {
//         const txStatus = targetTransaction.tx_status;
//         console.log("Transaction status:", txStatus);

//         if (txStatus === 'pending') {
//           _mempool("0");
//         }
        
//       } else {
//         console.log("No matching transaction found");
//       }

//       console.log("mempool Status:", mempool);
  
//       return transactionFetch;
//     } catch (err) {
//       console.log(err);
//       throw new Error(err);
//     }
//   };

//   export default fetchWalletTransaction; 