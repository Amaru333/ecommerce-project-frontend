import UIButton from "@/widgets/UIButton";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-96px)] flex flex-col justify-center bg-background text-white">
      <div className="screen-container text-center">
        <h1 className="text-7xl">
          iPhone <span className="text-blue-600 font-semibold">15</span>
        </h1>
        <p>starting at $999 or $41 per month</p>
        <UIButton className="my-10 px-12">buy now</UIButton>
        <div className="flex justify-end">
          <div className="relative">
            <div className="absolute bg-gradient-to-r from-transparent to-background w-full h-full"></div>
            <Image src="/assets/hero.png" alt="Hero Image" width={1000} height={0} className="h-auto" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
