"use client";
import React from "react";
import { HiClock } from "react-icons/hi";
import { motion } from "framer-motion";
import Button from "../button/Button";
import Image from "next/image";
import {
  BlogCardsSliceDefaultPrimaryCardsItem,
  Simplify,
} from "../../../../prismicio-types";
import Link from "next/link";

type BlogCardProps = {
  key: number;
  data: Simplify<BlogCardsSliceDefaultPrimaryCardsItem>;
  path: string;
};

const BlogCard = ({ path, key, data }: BlogCardProps) => {
  return (
    <motion.div
      key={key}
      className="mx-5 w-[372px] h-auto rounded-[16px] border-[3px] border-[#452A7C66] backdrop-blur-xl bg-[#452A7C1A] shadow-lg"
      whileHover={{
        y: -5,
        borderColor: "#01CFFF",
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {data.image?.url && (
        <Image
          src={data.image.url}
          alt="Blog-img"
          width={400}
          height={400}
          className="w-full h-[232px] pt-1 rounded-[16px]"
        />
      )}

      <div className="px-[16px] pb-[14px] mt-[20px]">
        <motion.h3
          className="font-[600] text-[18px] text-[#FFFFFF]"
          whileHover={{ color: "#01CFFF" }}
          transition={{ duration: 0.2 }}
        >
          {data.title}
        </motion.h3>

        <motion.p
          className="text-[12px] text-[#F0F0F0] mt-[7px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {data.description}
        </motion.p>

        <div className=" flex justify-between mt-[20px]">
          <Link href={path}>
            <Button
              style="border border-[#01CFFF] text-[#01CFFF] rounded-[100px] w-[78px] h-[28px] font-[500] text-[11px] hover:bg-[#01CFFF] hover:text-black transition-all ease-in-out duration-300"
              title="Read more"
            />
          </Link>

          <motion.div
            className="flex items-center gap-[4px] text-[#FFFFFF]"
            whileHover={{ scale: 1.05 }}
          >
            <HiClock className="text-[25px]" />
            <span className="text-[13px]">{data.est_reading_time}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
