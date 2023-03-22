import React from "react";
import NavBottom from "../NavBottom";

function TxSubmitted() {
    return (
        <><div className="flex flex-col items-center justify-center w-full mt-[130px] md:mt-[100px]">
        <h1 className="md:text-[40px] font-bold text-[20px]">
        Transaction submitted! 
        </h1>
      </div>
      <div className="mt-[52px]">
          <NavBottom />
        </div></>
    )
}

export default TxSubmitted;