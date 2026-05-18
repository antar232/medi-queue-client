import HeroSection from "@/components/HeroSection";
import HomePage from "@/components/HomePage";
import MediQueue from "@/components/MediQueue";
import Reviews from "@/components/Reviews";
import Subjects from "@/components/Subjects";
import Tutor from "@/components/Tutor";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <HeroSection/>
      <Tutor/>
      <MediQueue/>
      <Subjects/>
      <Reviews/>
    </div>
  );
}
