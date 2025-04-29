import React from "react";

interface blogBtnType {
  title: string;
  style: string;
}

const Button = ({ title, style }: blogBtnType) => {
  return (
    <button className={`${style}`}>
      {title}
    </button>
  );
};

export default Button;
