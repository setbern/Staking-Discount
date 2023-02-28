import React from 'react';
import ReactDOM from 'react-dom/client';
import ConnectWallet from './ConnectWallet';
import './index.css';
import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';
import Staking from './StakingPage';
import StateLogic from "./state";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ConnectWallet>
    <StateLogic>
      <Staking />
    </StateLogic>
    </ConnectWallet>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
