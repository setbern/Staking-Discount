import React, { useState, useEffect } from 'react';
import { useAppState } from './state';
import { toast } from 'react-toastify';
import { Connect } from '@stacks/connect-react';
import { AppConfig, UserSession } from '@stacks/connect';
import { fetchWalletHoldingV2 } from './components/FetchBadgers';

export const STACKS_API = "https://stacks-node-api.mainnet.stacks.co/";

const STACK_CLIENT_CONFIG = new AppConfig(['store_write', 'publish_data']);
const STACKS_USER_SESSION = new UserSession({
  appConfig: STACK_CLIENT_CONFIG,
});

const ConnectWallet = ({ children }) => {
  const { _authenticated, _senderAddress } = useAppState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const senderAddy = localStorage.getItem('principal');
    
    console.log('senderAddy', senderAddy);
    if (senderAddy) {
      _authenticated(true);
      _senderAddress(senderAddy);
          // Then, you can call the function with a wallet address, like this:
          fetchWalletHoldingV2(senderAddy)
          .then(data => {
            console.log('Data from fetchWalletHoldingV2:', data);
          })
          .catch(error => {
            console.log('Error from fetchWalletHoldingV2:', error);
          });
    }
  }, []);

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
