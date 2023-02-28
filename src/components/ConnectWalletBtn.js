import React, { useState } from 'react';
import { connectWallet } from "../ConnectWallet";

function ConnectWalletBtn() {
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);

    try {
      const { userData } = await connectWallet();
      console.log("User data:", userData);
      setLoading(false);
    } catch (error) {
      console.log("Error connecting wallet:", error.message);
      setLoading(false);
    }
  };

  return (
    <button
      className="mr-[36px] border rounded-full h-10 w-40 bg-[#5446F4] md:mr-[73px] md:text-[20px] md:h-15 md:w-56 text-white"
      onClick={handleConnect}
      disabled={loading}
    >
      {loading ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}

export default ConnectWalletBtn;
