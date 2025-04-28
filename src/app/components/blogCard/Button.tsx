import Link from "next/link";
import React from "react";

interface blogBtnType {
  title: string;
  style: string;
  path?: string | null;
}

const Button = ({ path, title, style }: blogBtnType) => {
  return (
    <Link href={`/blogList/${path}`}>
      <button className={`${style} transition-all ease-in-out duration-300`}>
        {title}
      </button>
    </Link>
  );
};

export default Button;
