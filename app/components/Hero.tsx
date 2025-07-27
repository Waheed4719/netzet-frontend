import Image from "next/image";
import React from "react";

const listItems = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

const CallToAction = () => {
  return (
    <div className="w-full lg:w-fit flex flex-col items-center lg:items-start justify-center gap-2">
      <button className="shadow-[2px_2px_10px_0px_#00E7F9] bg-[#fc004e] rounded-[10px] px-[40px] py-[8px] text-white font-bold text-[20px] h-[40px] w-full lg:w-[313px] items-center justify-center flex">
        GET STARTED{" "}
        <div className="h-[12px] w-[11px] ml-2">
          <Image
            src="/right-chevron.png"
            alt="Chevron Right"
            width={20}
            height={20}
            className="w-full h-full object-contain"
          />
        </div>
      </button>
      <p className="text-[12px] text-white text-center w-full">
        1-minute quiz for personalized Insights
      </p>
    </div>
  );
};

const Headings = () => {
  return (
    <div className="text-[16px] text-center lg:text-left">
      <h1 className="text-[25px] lg:text-[35px] text-center lg:text-left font-bold text-white font-urbanist leading-11">
        Want to Turn Social Media Into a Profitable Career?
      </h1>
      <h1 className="text-[25px] lg:text-[35px] text-center lg:text-left font-bold text-[#00E7F9] font-urbanist leading-11 [text-shadow:0px_4px_4px_#FC004E]">
        Discover your way to success with Fametonic:
      </h1>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full lg:w-[1256px] max-w-full flex flex-col lg:flex-row flex-1 justify-center items-center">
      <div className="relative lg:absolute lg:right-0 lg:top-0 w-1/2 lg:w-full h-full max-w-[680px] max-h-[680px]">
        <Image
          src="/mobile-large.png"
          alt="Hero Image"
          width={680}
          height={680}
          className="w-full h-auto object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="w-full max-w-[1022px] flex flex-col lg:flex-row justify-center lg:justify-start items-center relative py-4 flex-1">
        <div className="flex flex-col items-center lg:items-start justify-center w-full max-w-[516px] gap-6 px-4 sm:px-6 lg:px-0 py-16 z-2">
          <Headings />
          <ul className="flex flex-col items-start gap-[13px]">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="text-[16px] text-gray-300 text-white font-figtree font-semibold flex gap-2"
              >
                <span>✨</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <CallToAction />
          <div className="flex flex-col items-center justify-center lg:justify-start w-full gap-4">
            <p className="text-sm text-gray-400 text-[12px] text-[#ABABAB] text-center lg:text-left w-full">
              By clicking &quot;Get Started&quot;, you agree with Terms and
              Conditions, Privacy Policy, Subscription Terms
            </p>
            <small className="text-[10px] text-[#ABABAB] text-center lg:text-left w-full">
              Fametonic 2025 ©All Rights Reserved.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
