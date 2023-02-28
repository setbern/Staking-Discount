import React from "react";
import './App.css';
import BadgerNfts from "./components/BadgerMenu";
import BottomLine from "./components/BottomLine";
import NavTop from "./components/NavTop";

function Staking() {
    return (
        <>
        <NavTop /><div class="mt-[64px] ml-[64px] mr-[64px] md:ml-[111px] md:mr-[111px]">
            <p class="text-center text-sm md:text-2xl">Stake <span class="text-[#5446F4]">11</span> Badgers here to unlock a one-time 50% discount to the 100+ Days of Clarity Course.
                The number of Badgers to stake is decided by the floor price & USD/STX value (updated weekly). </p>
        </div>
        <BadgerNfts />
        </>
    );
}

export default Staking;