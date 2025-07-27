import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  { href: "/about-us", label: "About us" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="w-full max-w-[1022px] mx-auto flex items-start justify-between">
      <div className="w-32 h-12 sm:w-40 sm:h-16 md:w-48 md:h-20 lg:w-[170px] lg:h-[74px] flex items-center justify-center relative">
        <Image
          src="/fame-tonic-logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex items-center justify-center gap-10">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold text-[18px] text-[#A9A9A9] hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
