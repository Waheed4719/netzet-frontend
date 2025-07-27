import Image from "next/image";
import React from "react";
import { HERO_CONTENT } from "../constants/content"; // Assuming listItems is imported from a data file

const CallToAction = () => {
  return (
    <div className="w-full lg:w-fit flex flex-col items-center lg:items-start justify-center gap-2 max-w-[516px] order-2 lg:order-1">
      <button className="shadow-cyan bg-[#fc004e] rounded-[10px] px-[40px] py-[8px] text-white font-bold text-[20px] h-[40px] w-full lg:w-[313px] items-center justify-center flex cursor-pointer">
        {HERO_CONTENT.cta.buttonText}{" "}
        <svg
          width="11"
          height="12"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2"
        >
          <path
            d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </button>
      <p className="text-[12px] text-white text-center w-full">
        {HERO_CONTENT.cta.subtitle}
      </p>
    </div>
  );
};

const Headings = () => {
  const headingClasses =
    "text-[25px] lg:text-[35px] text-center lg:text-left font-bold font-urbanist";

  return (
    <div className="text-[16px] text-center lg:text-left lg:leading-11">
      <h1 className={`${headingClasses} text-white`}>
        {HERO_CONTENT.headings.primary}
      </h1>
      <h1 className={`${headingClasses} text-[#00E7F9] text-shadow-pink`}>
        {HERO_CONTENT.headings.secondary}
      </h1>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full lg:w-[1256px] max-w-full flex flex-col lg:flex-row flex-1 justify-center items-center">
      <div className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-[60%] h-full max-w-[680px] max-h-[680px] flex">
        <Image
          src="/mobile-large.png"
          alt="Hero Image"
          width={680}
          height={680}
          className="w-full h-auto object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="w-full max-w-[1022px] flex flex-col lg:flex-row justify-center lg:justify-start items-center relative pb-4 lg:py-4 flex-1">
        <div className="flex flex-col items-center lg:items-start justify-center w-full max-w-[700px] lg:max-w-[516px] gap-6 lg:py-16 z-2">
          <Headings />
          <ul className="flex flex-col items-start gap-[13px]">
            {HERO_CONTENT.listItems.map((item, index) => (
              <li
                key={index}
                className="text-[16px] text-white font-figtree font-semibold flex gap-2"
              >
                <span>✨</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="w-full flex flex-col gap-8 items-center lg:items-start pb-8">
            <CallToAction />
            <div className="flex flex-col items-center justify-center lg:justify-start w-full gap-4 order-1 lg:order-2">
              <p className="text-[12px] text-[#ABABAB] text-center lg:text-left w-full">
                {HERO_CONTENT.legal.terms}
              </p>
              <small className="text-[10px] text-[#ABABAB] text-center lg:text-left w-full">
                {HERO_CONTENT.legal.copyright}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
