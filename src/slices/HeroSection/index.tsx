"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Input from "@/app/components/input/Input";

export type BlogHerosectionProps =
  SliceComponentProps<Content.BlogHerosectionSlice>;

const BlogHerosection: FC<BlogHerosectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <motion.div
        className="max-w-[1005px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-[80px] md:mt-[120px] lg:mt-[143px] mb-[80px] md:mb-[150px] lg:mb-[204px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="font-[700] text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-[#FFFFFF] leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {slice.primary.title}
        </motion.h1>

        <motion.p
          className="text-[16px] sm:text-[18px] md:text-[20px] text-[#CCCCCC] mt-4 sm:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {slice.primary.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-[12px] mt-6 sm:mt-[30px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.button
            className="flex items-center justify-center bg-[#01CFFF] rounded-[100px] w-full sm:w-[168px] h-[50px]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-[500]">All Categories</span>
            <RiArrowDropDownLine className="text-[30px]" />
          </motion.button>

          <Input style="md:w-[662px] w-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogHerosection;
