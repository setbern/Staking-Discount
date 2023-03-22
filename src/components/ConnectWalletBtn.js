import React from 'react';
import { useAppState } from '../state';
import { useConnect } from '@stacks/connect-react';


function ConnectWalletBtn() {
  const { authenticated, _authenticated, _senderAddress, _fetchWalletRes, _selectedItems, _userStaked, _timeToUnstake, _listBadgerState, _listBabyBadgerState, _mempool } = useAppState();
  const { doOpenAuth } = useConnect();

  const handleAuth = async () => {
    doOpenAuth();
  };

  const handleLogout = () => {
    _authenticated(false);
    _senderAddress(undefined);
    _fetchWalletRes([]);
    _selectedItems([]);
    _userStaked(false);
    _timeToUnstake(null);
    _listBabyBadgerState([]);
    _listBadgerState([]);
    _mempool("");



    localStorage.removeItem('principal');
  };

  return authenticated ? (
    <button
      className="mr-[36px] border rounded-full h-10 w-20 text-[10px] bg-slate-700 md:mr-[73px] md:text-[20px] md:h-15 md:w-36 text-white font-light"
      onClick={handleLogout}
    >
      logout
    </button>
  ) : (
    <button
      className="mr-[36px] border rounded-full h-10 w-24 text-[10px] bg-[#5446F4] md:mr-[73px] md:text-[20px] md:h-15 md:w-56 text-white"
      onClick={handleAuth}
    >
      Connect Wallet
    </button>
  );
}

export default ConnectWalletBtn;
