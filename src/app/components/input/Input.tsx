// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { CiSearch } from "react-icons/ci";

// interface InputType {
//   style?: string;
// }

// const Input = ({ style }: InputType) => {
//   return (
//     <>
//       <motion.input
//         type="text"
//         className={`${style} bg-white px-6 sm:px-[38px] py-4 sm:py-[15px] rounded-[50px] placeholder:text-[#979797]`}
//         placeholder="Search"
//         whileFocus={{
//           scale: 1.01,
//           boxShadow: "0 0 0 2px #01CFFF",
//         }}
//         transition={{ duration: 0.2 }}
//       >
//         <CiSearch className="font-semibold text-[22px] text-[#979797]" />
//       </motion.input>
//     </>
//   );
// };

// export default Input;




"use client";
import React from "react";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

interface InputType {
  style?: string;
}

const Input = ({ style }: InputType) => {
  return (
    <div className="relative">
      <motion.input
        type="text"
        className={`${style} bg-white px-6 sm:px-[24px] py-4 sm:py-[15px] rounded-[50px] placeholder:text-[#979797] pr-12 sm:pr-14 text-black`}
        placeholder="Search"
        whileFocus={{
          scale: 1.01,
          boxShadow: "0 0 0 2px #01CFFF",
        }}
        transition={{ duration: 0.2 }}
      />
      <CiSearch className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 font-semibold text-[22px] text-[#979797]" />
    </div>
  );
};

export default Input;