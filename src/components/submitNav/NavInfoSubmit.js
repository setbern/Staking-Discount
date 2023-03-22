import React from "react";
import NavBottom from "../NavBottom";
import EmailSubmit from "./EmailSubmit";
import StakeBtnSubmit from "./StakeBtnSubmit";

function NavInfoSubmit() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-[12px]">
        <h1 className="text-[40px] font-bold">Complete & Submit</h1>
        <p className="text-center font-light text-sm md:text-[24px]">
          {" "}
          Almost done! We just need an email to send the discount to <br></br>
          (don’t worry, we won’t save this).{" "}
        </p>

        <StakeBtnSubmit />
      </div>
      <div>
        <NavBottom className="h-[90px] md:h-16" />
      </div>
    </>
  );
}

export default NavInfoSubmit;
