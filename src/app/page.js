import HeroSection from "@/components/HeroSection";
import HomePage from "@/components/HomePage";
import MediQueue from "@/components/MediQueue";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <HeroSection/>
      <MediQueue/>
    </div>
  );
}
