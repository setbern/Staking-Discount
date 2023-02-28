import React, { useState, useEffect } from 'react';
import { useAppState } from './state';
import { toast } from 'react-toastify';
import { Connect } from '@stacks/connect-react';
import { AppConfig, UserSession } from '@stacks/connect';

const STACK_CLIENT_CONFIG = new AppConfig(['store_write', 'publish_data']);
const STACKS_USER_SESSION = new UserSession({
  appConfig: STACK_CLIENT_CONFIG,
});

const ConnectWallet = ({ children }) => {
  const { _authenticated, _senderAddress } = useAppState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const senderAddy = localStorage.getItem('principal');
    //const senderAddy = "SP329G766AV8Z01X9EEAHPDQ4WDJXT2A0XB383MGP";
    console.log('senderAddy', senderAddy);
    if (senderAddy) {
      console.log('does this run');
      _authenticated(true);
      _senderAddress(senderAddy);
    }
  }, []);

  const authOptions = {
    appDetails: {
      name: 'Staking-Badgers',
      icon: '',
    },
    username: 'test',
    redirectTo: '/',
    onFinish: async () => {
      try {
        setLoading(true);
        let userData = STACKS_USER_SESSION.loadUserData();

        console.log('userData', userData);
        const senderAddress = userData.profile.stxAddress.mainnet;
        //const senderAddress = "SP31WTJ415SNJM9H6202S3WK9AFQXQZMT48PESBQE";
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

export default ConnectWallet;
