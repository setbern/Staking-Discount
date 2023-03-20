import './App.css';
import React from 'react';
import ClaimBtn from './components/ClaimBtn';
import BottomLine from './components/BottomLine';

function LandingPage() {
  return (
    <><div className="flex flex-col items-center justify-center h-screen bg-gradient-br-tl overflow-y-auto">
      <div className="flex relative items-center justify-center rounded-full h-[256px] w-[256px] bg-gradient-purple -mt-[100px]">
        <div className="flex relative items-center justify-start rounded-full h-[240px] w-[240px] bg-white">
          <div className="flex items-center justify-center">
            <img className="h-[148px] justify-start ml-[50px]" src="/images/Strata-Logo.png" alt="" />
            <div className="flex flex-col -ml-14 -mt-8">
              <h3 className="text-myGray text-2xl  font-medium">
                100+
              </h3>
              <p className="font-light text-myGray">
                Days of Clarity
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl mt-16 font-bold md:text-[50px]">
        <span className="text-myPurple">Badgers</span><span className="text-black">Build Discount</span>
      </h2>
      <div className='flex flex-col items-center mt-5'>
      <p className="mx-3 text-center text-sm font-light mt-2 md:text-[26px] text-[#424242]">
        Built by Badgers for the future builders - login & stake Badger 
        </p>
        <p className="mx-3 text-center text-sm font-light md:text-[26px] text-[#424242]">
        NFTs to claim a 50% discount for the <a href="https://clarity11.teachable.com/" target="_blank" rel="noreferrer" className="text-myPurple hover:underline">Clarity Course.</a>
        </p>
      </div>
      <ClaimBtn text="Claim" />
    </div>
    <div>
        <BottomLine />
      </div></>
  );
}

export default LandingPage;
