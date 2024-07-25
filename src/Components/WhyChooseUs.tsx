
"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
    {
        title: "Step into Comfort",
        description: "Discover our collection of premium shoes that combine unparalleled comfort with modern style. Each pair is crafted with precision, ensuring the perfect fit for any occasion. Whether you're heading to work, hitting the gym, or enjoying a casual day out, our shoes offer the support and durability you need to stay on your feet with confidence. Explore our range and find the perfect pair to elevate your footwear game."
      },
      {
        title: "Comfort Meets Style",
        description: "Experience the perfect blend of comfort and style with our exquisite range of shoes. Designed for all-day wear, our shoes provide superior cushioning and support, making them ideal for any activity. From sleek, professional looks to casual, everyday wear, our shoes cater to every need and preference. Step up your shoe game and enjoy unmatched comfort with every step."
      },
      {
        title: "Elegance in Every Step",
        description: "Our shoes are designed with elegance and sophistication in mind, ensuring you always look your best. Crafted from high-quality materials, they offer both durability and style. Perfect for formal events or casual outings, our shoes provide the perfect balance of comfort and chic design."
      },
      {
        title: "Unmatched Durability",
        description: "Built to last, our shoes are made from premium materials that withstand the test of time. Whether you're navigating busy city streets or exploring the great outdoors, our shoes provide exceptional durability and comfort. Invest in footwear that stands up to any challenge."
      },
      {
        title: "Innovative Design",
        description: "Stay ahead of the trend with our innovative shoe designs that combine fashion-forward aesthetics with practical features. Each pair is meticulously crafted to offer superior support and style, ensuring you always step out with confidence. Discover the future of footwear with our cutting-edge collection."
      },
  ];
function WhyChooseUs() {
  return (
    <div>
      
      <StickyScroll
       content={content}/>
    </div>
  )
}

export default WhyChooseUs
