import React from 'react';

function UnStakeBtn() {
  return (
    <button className="border rounded-full h-[48px] w-[145px] bg-[#5446F4] text-white font-bold mt-1">
      <div className="flex items-center justify-center">
      <div className="flex items-center justify-center rounded-full bg-[#9C95F8] w-[24px] h-[24px] blur-sm">
          <img src="./images/Vector.png" />
        </div>
        <span className="ml-2 text-2xl mb-1 blur-sm">unstake</span>
      </div>
    </button>
  );
}

export default UnStakeBtn;