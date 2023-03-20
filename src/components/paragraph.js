import React from 'react';
import { stakeRequierements } from "./stakeRequirementes";

function Paragraph() {

  return (
    <p className="text-center text-xs md:text-2xl">
          Stake <span className="text-[#5446F4]">{stakeRequierements}</span> Badgers here to unlock a one-time 50% discount to the 100+ Days of Clarity Course.
        </p>
  );
}

export default Paragraph;