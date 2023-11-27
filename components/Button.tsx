import React from "react";

let url: string = "https://www.google.com";

type ButtonProps = {
  bgColor: string;
  fontSize: number;
  phillShape: boolean;
};

const Button = ({ bgColor, fontSize, phillShape }: ButtonProps) => {
  // const bgColor = props.bgColor;
  //   const { bgColor } = props;
  return (
    <>
      <div className="bg-blue-500 text-white rounded px-4 py-2">Click Me</div>
    </>
  );
};

export default Button;
