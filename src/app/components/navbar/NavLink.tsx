import Link from "next/link";
import React from "react";

interface NavLinkProps {
  title: string;
  path: string;
}
const NavLink = ({ title, path }: NavLinkProps) => {
  return (
    <>
      <li className="group">
        <Link
          href={path}
          className="px-[13px] py-[9px] rounded-[25px] text-[#FFFFFF] hover:text-black hover:bg-[#01CFFF]/80 focus:bg-[#01CFFF] active:bg-[#01CFFF]/60 transition-all duration-300 ease-in-out relative overflow-hidden"
        >
          <span className="relative z-10">{title}</span>
          <span className="absolute inset-0 bg-[#01CFFF] scale-0 group-hover:scale-100 origin-center transition-all duration-300 ease-in-out rounded-[25px] z-0"></span>
        </Link>
      </li>
      {/* <li className="">
        <Link
          href={path}
          className="px-[13px] py-[9px] rounded-[25px] text-[#FFFFFF] hover:text-black hover:bg-[#01CFFF]/80 focus:bg-[#01CFFF] active:bg-[#01CFFF]/60 transition-all duration-300 ease-in-out"
        >
          {title}
        </Link>
      </li> */}
    </>
  );
};

export default NavLink;
