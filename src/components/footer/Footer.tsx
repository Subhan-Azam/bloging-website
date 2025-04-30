import Image from "next/image";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import FooterCard from "./FooterCard";

const Footer = () => {
  return (
    <div className="border-t border-[#01CFFF]">
      <div className="container w-full mx-auto px-5">
        <div className="py-10 flex justify-center flex-col md:flex-row gap-10 md:gap-[42px]">
          <div className="text-white w-full md:max-w-[558px]">
            <Image src="/assets/logo.png" alt="Logo" width={200} height={200} />

            <div className="mt-10">
              <span className="font-medium text-sm">Newsletter</span>
              <div className="flex flex-col sm:flex-row mt-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="placeholder-[#656565] rounded-tl-[8px] sm:rounded-bl-[8px] sm:rounded-tr-none rounded-tr-[8px] w-full sm:w-[240px] h-[40px] bg-[#F9F9F9] px-4 outline-none text-black"
                />
                <button className="w-full sm:w-[121px] h-[40px] bg-[#01CFFF] text-black text-sm font-medium sm:rounded-tr-[8px] rounded-bl-[8px] sm:rounded-bl-none rounded-br-[8px] sm:rounded-br-[8px] hover:bg-[#00bce3] transition">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            <h2 className="font-medium text-xl mt-14 mb-6">
              info@techloset.com
            </h2>

            <div className="flex flex-col gap-3">
              <h2 className="font-medium text-xl text-[#01CFFF]">Follow Us</h2>
              <div className="flex gap-5 text-xl">
                {[
                  FaYoutube,
                  FaLinkedinIn,
                  TbBrandInstagramFilled,
                  FaFacebookF,
                ].map((Icon, idx) => (
                  <Icon
                    key={idx}
                    className="hover:text-[#01CFFF] transition duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-[558px] flex flex-col sm:flex-row justify-between gap-8">
            <div className="flex flex-col gap-10">
              <FooterCard />
              <FooterCard />
            </div>
            <div className="flex flex-col gap-10">
              <FooterCard />
              <FooterCard />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0A192F] py-[22px] ">
        <div className="container w-full mx-auto flex sm:flex-row flex-col text-center sm:gap-0 gap-3.5 justify-between px-5">
          <div className="flex md:gap-[120px] gap-[70px] text-center">
            <span className="text-[#FFFFFF] text-[12px] font-[300] ">
              Privacy Policy
            </span>
            <span className="text-[#FFFFFF] text-[12px] font-[300] ">
              Terms Of Use
            </span>
          </div>
          <span className="text-[#FFFFFF] text-[12px] font-[300]">
            Copyright 2013 - Mil, All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
