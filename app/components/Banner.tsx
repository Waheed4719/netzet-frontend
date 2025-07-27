import React from "react";

const Banner = () => {
  return (
    <div className="p-2 min-h-[46px] w-full font-extrabold text-[length:calc(1rem*1.5)] leading-[calc(1rem*1.5)] text-white text-center bg-gradient-to-r from-[#fc004e] to-[#10cbe0] flex items-center justify-center">
      <div className="font-extrabold">
        <span className="text-[#00E7F9]">🚀 FRESH BEGINNINGS SALE: </span>
        Extra 25% OFF, Limited Spots - start your journey today!
      </div>
    </div>
  );
};

export default Banner;
