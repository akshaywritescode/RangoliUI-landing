import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header/>
    </div>
  );
}
