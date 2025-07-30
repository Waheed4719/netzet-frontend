import React from "react";

const Banner = () => {
  return (
    <div className="p-5 lg:min-h-[46px] w-full font-extrabold text-white text-center bg-gradient-to-r from-[#fc004e] to-[#10cbe0] flex items-center justify-center">
      <div className="font-extrabold text-[16px] lg:text-[22px] text-shadow-black">
        <span className="text-primary-cyan">🚀 FRESH BEGINNINGS SALE: </span>
        Extra 25% OFF, Limited Spots - start your journey today!
      </div>
    </div>
  );
};

export default Banner;
