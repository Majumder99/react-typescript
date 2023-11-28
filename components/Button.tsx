import React from "react";

let url: string = "https://www.google.com";

// type ButtonProps = {
//   bgColor: string;
//   fontSize: number;
//   phillShape?: boolean; //it can be null or boolean
//   // padding: number[]
//   padding: [number, number, number]; //tuple
// };

// const Button = ({ bgColor, fontSize, phillShape, padding }: ButtonProps) => {
//   // const bgColor = props.bgColor;
//   //   const { bgColor } = props;
//   return (
//     <>
//       <div className="bg-blue-500 text-white rounded px-4 py-2">Click Me</div>
//     </>
//   );
// };

type ButtonProps = {
  onClick: () => void;
};
// type ButtonProps = {
//   style: React.CSSProperties;
// };
// type ButtonProps = {
//   style: {
//     backgroundColor: string;
//     fontSize: number;
//   };
// };

const Button = ({ onClick }: ButtonProps) => {
  // const bgColor = props.bgColor;
  //   const { bgColor } = props;
  return (
    <>
      <div onClick={onClick}>Click Me</div>
    </>
  );
  // const Button = ({ style }: ButtonProps) => {
  //   // const bgColor = props.bgColor;
  //   //   const { bgColor } = props;
  //   return (
  //     <>
  //       <div style={style}>Click Me</div>
  //     </>
  //   );
};

export default Button;
