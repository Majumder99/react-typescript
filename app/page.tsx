import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  const onclick = () => {
    console.log("I'm clicked");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Button
        bgColor="red"
        fontSize={23}
        phillShape={true}
        padding={[10, 2, 2]}
      /> */}
      {/* <Button
        style={{
          backgroundColor: "blue",
          fontSize: 24,
        }}
      /> */}
      <Button onClick={onclick} />
    </main>
  );
}
