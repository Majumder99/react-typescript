import Button from "@/components/Button";
import GenericsButton from "@/components/GenericsButton";
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
      {/* <Button onClick={onclick} /> */}
      {/* <Button>Click me</Button> */}
      {/* <Button type="submit" defaultValue="only" /> */}
      <GenericsButton countValue={2} countHistory={["2", 3]} />
    </main>
  );
}
