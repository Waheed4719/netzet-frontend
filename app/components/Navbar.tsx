import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-2 w-full flex items-start justify-between">
      <div className="w-32 h-12 sm:w-40 sm:h-16 md:w-48 md:h-20 lg:w-[170px] lg:h-[73px] flex items-center justify-center relative">
        <Image
          src="/fame-tonic-logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex items-center justify-center gap-10">
        <Link
          href="/about-us"
          className="font-semibold text-[18px] text-[#A9A9A9] hover:text-white "
        >
          About Us
        </Link>

        <Link
          href="/contact"
          className="font-semibold text-[18px] text-[#A9A9A9] hover:text-white "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
