import React from 'react';
import { stakeRequierements } from "../stakeRequirementes";

function ParagraphStakeOver() {

  return (
    <p className="text-center text-xs md:text-2xl">
          You've already claimed a discount! We limited this discount claim to a single claim per address & it seems this principal/address has already staked.
        </p>
  );
}

export default ParagraphStakeOver;