import React from 'react';

function LeftTopTitle() {
  return (
    <div className="flex items-center">
    <div className="flex items-center justify-center border h-10 w-10 bg-white">
      <img src="images/Badger-top-left.png" alt="" className="h-[31px] w-[38px]" />
    </div>
    <h2 className="ml-3 text-2xl md:ml-[19px] font-bold md:text-[40px] md:-mt-1">
      <span className="text-[#5446F4]">Badgers</span>
      <span>Build</span>
    </h2>
  </div>
  );
}

export default LeftTopTitle;