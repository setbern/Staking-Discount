import React from "react";

function NavBottom(props) {
    const { className } = props;
    return (
        <div className={`flex items-center justify-between w-full md:-mt-0 -mt-0 ${className}`}>
          <div className="mt-[63px] ml-5 md:mt-2.5 md:ml-16">
            <img src="images/Left Side.png" alt="" className="h-[43px] w-[220px] md:h-[70px] md:w-[360px]" />
          </div>
          <div className="mt-[63px] mr-5 md:mt-2.5 md:mr-16">
      <img src="images/Right Side.png" alt="" className="h-[43px] w-[220px] md:h-[70px] md:w-[360px]" />
    </div>
  </div>
    )
}

export default NavBottom;