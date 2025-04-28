import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#0A192F] w-full h-[68px]">
      <div className="ml-[144px]">
        <Link href={"/"}>
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
        {[
          { title: "Home", path: "./path1" },
          { title: "Portfolio", path: "./path2" },
          { title: "Services", path: "./path3" },
          { title: "Blog", path: "./path4" },
          { title: "About Us", path: "./path5" },
          { title: "Join Techloset", path: "./path6" },
        ].map((link, index) => (
          <NavLink key={index} title={link.title} path={link.path} />
        ))}
      </ul>

      <button className="bg-[#01CFFF] w-[252px] h-full px-[13px] py-[9px] rounded-bl-[25px] font-[700] text-[16px] cursor-pointer hover:bg-[#01CFFF]/90 active:bg-[#01CFFF]/80 transition-all duration-300">
        Let Build Together
      </button>
    </div>
  );
};

export default Navbar;
