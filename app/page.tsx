import Image from "next/image";
import Header from "./components/Header";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import Separator from "./components/Separator";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <HeroSection />
      <Separator />
      <div className="my-10">
        <PricingSection />
      </div>
      <Separator />
      <div className="my-20">
        <TestimonialSection />
      </div>
      <Footer />
    </div>
  );
}
