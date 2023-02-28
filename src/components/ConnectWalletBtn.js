import React from 'react';
import { useAppState } from '../state';
import { useConnect } from '@stacks/connect-react';


function ConnectWalletBtn() {
  const { authenticated, _authenticated, _senderAddress } = useAppState();
  const { doOpenAuth } = useConnect();

  const handleAuth = async () => {
    doOpenAuth();
  };

  const handleLogout = () => {
    _authenticated(false);
    _senderAddress(undefined);

    localStorage.removeItem('principal');
  };

  return authenticated ? (
    <button
      className="mr-[36px] border rounded-full h-10 w-40 bg-red-500 md:mr-[73px] md:text-[20px] md:h-15 md:w-56 text-white"
      onClick={handleLogout}
    >
      Disconnect
    </button>
  ) : (
    <button
      className="mr-[36px] border rounded-full h-10 w-40 bg-[#5446F4] md:mr-[73px] md:text-[20px] md:h-15 md:w-56 text-white"
      onClick={handleAuth}
    >
      Connect Wallet
    </button>
  );
}

export default ConnectWalletBtn;
