'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
      id: 1,
      name: "adidas",
      designation: "",
      image:
        "https://inkbotdesign.com/wp-content/uploads/2023/02/cover-adidas-new-logo-removes-name-before-after.webp",
    },
    {
      id: 2,
      name: "converse star",
      designation: "",
      image:
        "https://inkbotdesign.com/wp-content/uploads/2023/08/best-shoe-brand-logos-converse-star.webp",
    },
    {
      id: 3,
      name: "Puma",
      designation: "",
      image:
        "https://inkbotdesign.com/wp-content/uploads/2016/05/Puma-Logo-Design.png",
    },
    {
      id: 4,
      name: "New Balance",
      designation: "",
      image:
        "https://inkbotdesign.com/wp-content/uploads/2023/08/New-Balance-Logo-2006.webp",
    },
    {
      id: 5,
      name: "reebok",
      designation: "",
      image:
        "https://inkbotdesign.com/wp-content/uploads/2020/01/reebok-rebrand-2019.jpg",
    },
    // {
    //   id: 6,
    //   name: "Dora",
    //   designation: "The Explorer",
    //   image:
    //     "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    // },
  ];

export default function Company() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className=" text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Companies</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the Comfort Shoes</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
            </div>
        </WavyBackground>
    </div>
  )
}

