import React, { useState } from 'react';
import DropMenu from './DropMenu';


function BadgerNfts() {

  return (
    <div className="flex items-center justify-between bg-gradient-br-tl ml-[64px] mr-[64px] h-14 rounded-2xl mt-10 md:ml-[111px] md:mr-[111px]">
        <div className="flex ml-5">
            <h2 className="font-bold text-xs md:text-lg">Your Badger NFTs</h2>
        </div>
        <div className='mr-10'>
            <DropMenu />
        </div>
        {/* <div className="flex flex-row items-center justify-end">
            <div className="flex items-center justify-end mr-5">
                <div className="relative">
                    <div className="flex items-center justify-between border rounded-full bg-[#9C95F8] px-4 py-2 w-24 md:w-40 md:mr-3">
                        <span className="ml-1 text-[6px] md:text-sm md:font-light">All Items</span>
                    </div>
                    <button type="button" className="z-40 absolute top-0 left-0 arrow focus:outline-none -rotate-90 translate-x-20 -translate-y-5 md:-rotate-90 md:-translate-y-6 md:translate-x-12 md:top-1/2 md:left-1/2">
                    </button>
                </div>
                <div className="relative">
                    <div className="flex items-center justify-between border rounded-full bg-[#9C95F8] px-4 py-2 w-24 md:w-40 md:mr-3">
                        <span className="ml-1 text-[6px] md:text-sm md:font-light">All Collections</span>
                    </div>
                    <button type="button" className="z-40 absolute top-0 left-0 arrow2 focus:outline-none -rotate-90 translate-x-20 -translate-y-5 md:-rotate-90 md:-translate-y-6 md:translate-x-12 md:top-1/2 md:left-1/2">
                    </button>
                </div>
            </div>
        </div> */}
    </div>
  );
}

export default BadgerNfts;