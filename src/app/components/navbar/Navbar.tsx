"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Portfolio", path: "#" },
    { title: "Services", path: "#" },
    { title: "Blog", path: "blogList" },
    { title: "About Us", path: "#" },
    { title: "Join Techloset", path: "#" },
  ];

  return (
    <>
      <nav className="w-full h-[68px] sticky top-0 left-0 z-50 bg-gradient-to-b from-[#FFFFFF66] to-[#FFFFFF14]">
        <div className="hidden md:flex justify-between items-center h-full max-w-[1440px] mx-auto">
          <div className="">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                className="w-[190px] h-[46px] hover:scale-105 transition-transform duration-300"
                width={200}
                height={200}
              />
            </Link>
          </div>

          <ul className="flex gap-[6px] font-[600]">
            {navLinks.map((link, index) => (
              <NavLink key={index} title={link.title} path={link.path} />
            ))}
          </ul>

          <button className="bg-[#01CFFF] w-[252px] h-full px-[13px] py-[9px] rounded-bl-[25px] font-[700] text-[16px] cursor-pointer hover:bg-[#01CFFF]/90 active:bg-[#01CFFF]/80 transition-all duration-300">
            Let Build Together
          </button>
        </div>

        <div className="md:hidden flex justify-between items-center h-full px-4">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              className="w-[150px] h-[36px] hover:scale-105 transition-transform duration-300"
              width={200}
              height={200}
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden bg-[#0A192F] w-full transition-all duration-300 ease-in-out ${isOpen ? "mt-[68px] h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"}`}
      >
        {isOpen && (
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full text-center">
                <NavLink
                  title={link.title}
                  path={link.path}
                  mobile
                  onClick={() => setIsOpen(false)}
                />
              </li>
            ))}
            <li className="w-full mt-4 px-4">
              <Button
                title="Let Build Together"
                style="bg-[#01CFFF] w-full py-3 font-[700] text-[16px] text-[#130D29] cursor-pointer hover:bg-[#01CFFF]/90 transition-all duration-300"
              />
            </li>
          </ul>
        )}
      </div>

      <div className={isOpen ? "h-0" : "sm:h-0 h-[68px]"}></div>
    </>
  );
};

export default Navbar;
