"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants/content";

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkBaseClasses = "font-semibold hover:text-white";
  const desktopLinkClasses = `${linkBaseClasses} text-[18px] text-navigation`;
  const mobileLinkClasses = `${linkBaseClasses} block text-[24px] text-white hover:text-[#00E7F9]`;

  return (
    <>
      <div className="w-full max-w-[1022px] mx-auto flex items-start justify-between relative">
        {/* Logo */}
        <div className="w-32 h-12 sm:w-40 sm:h-16 md:w-48 md:h-20 lg:w-[170px] lg:h-[74px] flex items-center justify-center relative mx-auto lg:mx-0">
          <Image
            src="/fame-tonic-logo.png"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-10">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href="#"
              className={desktopLinkClasses}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button - Absolute positioned on mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2"
          aria-label="Toggle menu"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-6 h-0.5 bg-white" />
          ))}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 lg:hidden">
          {/* Close Button - Cross Icon */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-white z-10 cursor-pointer"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>

          {/* Mobile Navigation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-8">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href="#"
                  onClick={toggleMenu}
                  className={mobileLinkClasses}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
