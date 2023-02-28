import React from "react";

function ClaimBtn(props) {
    
    function handleClick () {
        alert("Insert event here");
    }

    return (
        <button 
        onClick={handleClick}
        className="mt-20 bg-myPurple text-white h-[72px] w-[256px] 
        rounded-full font-bold text-4xl transition duration-300 transform hover:scale-110">
            {props.text}
        </button>
    );  
}

export default ClaimBtn;