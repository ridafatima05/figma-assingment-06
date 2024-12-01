"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu toggled:", !isMenuOpen); 
  };

  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-row lg:w-[1280px] lg:h-[72px] w-[428px] h-[72px] bg-[#F7F7F7] lg:flex lg:items-center justify-between sm:px-7 lg:px-16 relative">
      <div className="w-[380px] h-[48px] lg:w-[1152px] lg:h-[44px] items-center justify-between flex">
        {/* Left side div (logo) */}
        <div className="lg:flex lg:items-center lg:space-x-2 lg:ml-10 items-center flex ml-2">
          <Image
            src="/images/Frame.png"
            width={32.58}
            height={30.38}
            alt="logo"
            className="transform translate-x-[-1px]"
          />
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">Ddsgnr</h1>
        </div>

        {/* Right side div (desktop menu and buttons) */}
        <div className="flex items-center space-x-4 px-3 bg-[#FFFFFF] sm:space-x-8 md:space-x-10 justify-between">
          {/* Desktop Navigation Menu */}
          <ul className="hidden sm:flex space-x-10 text-base sm:text-lg">
            <li className="border-b border-black hover:text-[#10F2C5]">
              <Link href="/" onClick={() => scrollToSection("home")}>Home</Link>
            </li>
            <li className="hover:text-[#10F2C5]">
              <Link href="/courses" onClick={() => scrollToSection("courses")}>Courses</Link>
            </li>
            <li className="hover:text-[#10F2C5]">
              <Link href="/services" onClick={() => scrollToSection("services")}>Services</Link>
            </li>
            <li className="hover:text-[#10F2C5]">
              <Link href="/achievements" onClick={() => scrollToSection("achievements")}>Achievements</Link>
            </li>
            <li className="hover:text-[#10F2C5]">
              <Link href="/about" onClick={() => scrollToSection("about")}>About Us</Link>
            </li>
            <li className="hover:text-[#10F2C5]">
              <Link href="/testimonials" onClick={() => scrollToSection("testimonials")}>Testimonials</Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="lg:block hidden items-center space-x-4 justify-end">
            <button className="border border-black bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF] rounded-md px-4 py-2 w-[80px] h-[40px]">
              Login
            </button>
            <button className="px-4 py-2 border border-black rounded-md bg-black text-white hover:bg-[#FFFFFF] hover:text-[#000000] w-[95px] h-[40px]">
              Sign Up
            </button>
          </div>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? (
              // Close Icon (X) for mobile
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Open Icon (hamburger)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-white w-full fixed top-[72px] left-0 py-4 space-y-4 z-50">
          {/* Close Icon inside Mobile Menu */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links inside Mobile Menu */}
          <ul className="space-y-4 text-lg">
            <li>
              <Link href="/" onClick={() => { scrollToSection("home"); setIsMenuOpen(false); }}>Home</Link>
            </li>
            <li>
              <Link href="/courses" onClick={() => { scrollToSection("courses"); setIsMenuOpen(false); }}>Courses</Link>
            </li>
            <li>
              <Link href="/services" onClick={() => { scrollToSection("services"); setIsMenuOpen(false); }}>Services</Link>
            </li>
            <li>
              <Link href="/achievements" onClick={() => { scrollToSection("achievements"); setIsMenuOpen(false); }}>Achievements</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => { scrollToSection("about"); setIsMenuOpen(false); }}>About Us</Link>
            </li>
            <li>
              <Link href="/testimonials" onClick={() => { scrollToSection("testimonials"); setIsMenuOpen(false); }}>Testimonials</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
