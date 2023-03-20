import React from 'react';
import ReactDOM from 'react-dom/client';
import ConnectWallet from './ConnectWallet';
import './index.css';
import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';
import Staking from './StakingPage';
import StateLogic from "./state";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateLogic>
      <Router>
        <ConnectWallet>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/claim" element={<Staking />} />
          </Routes>
        </ConnectWallet>
      </Router>
    </StateLogic>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

