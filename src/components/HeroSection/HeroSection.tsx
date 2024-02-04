import React from "react";
import HeroButtons from "@/components/HeroSection/HeroButtons";
import HeroHeading from "@/components/HeroSection/HeroHeading";

function HeroSection() {
  return (
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <HeroHeading />
      <HeroButtons />
    </div>
  );
}

export default HeroSection;
