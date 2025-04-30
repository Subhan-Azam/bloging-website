"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FaUserCircle } from "react-icons/fa";
import Input from "@/components/input/Input";
import { motion } from "framer-motion";
import { MdAccessTime } from "react-icons/md";


export type BlogHeroSectionProps =
  SliceComponentProps<Content.BlogHeroSectionSlice>;

const BlogHeroSection: FC<BlogHeroSectionProps> = ({ slice }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pt-[61px] container mx-auto px-5">
        <motion.div
          className="flex-none sm:flex justify-end mb-[26px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input style="w-full md:w-[316px]" />
        </motion.div>

        <motion.h1
          className="max-w-[775px] w-full text-3xl md:text-[40px] font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {slice.primary.title}
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row gap-2 md:gap-[4px] mt-5 md:mt-[20px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full md:w-[336px] h-[40px] rounded-[16px] flex justify-center items-center gap-2 text-base md:text-[16px] font-normal text-[#B7B7B7] bg-gradient-to-t from-[#FFFEFE66] to-[#FFFFFF14]"
            variants={itemVariants}
          >
            <FaUserCircle className="text-[22px]" />
            <span>
              {slice.primary.author} | {slice.primary.date}
            </span>
          </motion.div>
          <motion.div
            className="w-full md:w-[116px] h-[40px] rounded-[16px] flex justify-center items-center bg-gradient-to-t from-[#FFFEFE66] to-[#FFFFFF14]"
            variants={itemVariants}
          >
            {slice.primary.category}
          </motion.div>
          <motion.div
            className="w-full md:w-[113px] h-[40px] rounded-[16px] flex justify-center items-center gap-1.5 bg-gradient-to-t from-[#FFFEFE66] to-[#FFFFFF14]"
            variants={itemVariants}
          >
            <MdAccessTime className="text-[22px]" />
            {slice.primary.read_time}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
