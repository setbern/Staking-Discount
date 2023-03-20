import React from 'react';
import { useNavigate } from 'react-router-dom';

function ClaimBtn(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/claim');
    }

    return (
        <button
            onClick={handleClick}
            className="mt-10 bg-myPurple text-white h-[36px] w-[128px] text-xl md:h-[72px] md:w-[256px] 
        rounded-full font-bold md:text-4xl transition duration-300 transform hover:scale-110"
        >
            {props.text}
        </button>
    );
}

export default ClaimBtn;

