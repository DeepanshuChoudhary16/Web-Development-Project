import HeroSection from "@/Components/HeroSection";
import Image from "next/image";
import FeatureShoes from "@/Components/FeatureShoes";
import WhyChooseUs from "@/Components/WhyChooseUs";
export default function Home() {
  return (
    <main>
      <HeroSection/>
      <FeatureShoes/>
      <WhyChooseUs/>
    </main>
  );
}
