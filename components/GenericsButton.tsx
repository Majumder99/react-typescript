import React from "react";

// type ButtonProps<T> = {
//     countValue: T;
//     countHistory: T[]
// }
type ButtonProps<T1, T2> = {
  countValue: T1;
  countHistory: T2[];
};

// export default function GenericsButton<T>({countValue, countHistory} : ButtonProps<T>) {
//     return (
//         <>
//             <button>click me!</button>
//         </>
//   )
// }
export default function GenericsButton<T1, T2>({
  countValue,
  countHistory,
}: ButtonProps<T1, T2>) {
  return (
    <>
      <button>click me!</button>
    </>
  );
}
