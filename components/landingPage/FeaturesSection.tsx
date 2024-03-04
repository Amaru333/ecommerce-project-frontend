import { FEATURES_CONSTANT } from "@/constants/landingPageConstants";
import Image from "next/image";
import React from "react";

const SecondProduct = () => {
  return (
    <section className="h-screen flex flex-col justify-center text-black">
      <div className="screen-container text-center">
        <h1 className="text-7xl font-semibold text-blue-600">latest iOS,</h1>
        <h2 className="text-5xl font-semibold">latest experience</h2>
        <div className="grid grid-cols-3 gap-12 py-8">
          {FEATURES_CONSTANT.map((item, index) => (
            <div key={index} className="bg-white col-span-1 rounded-md py-4">
              <Image src={item.image} height={1000} width={1000} alt={item.heading} className="rounded-md aspect-square" />
              <p className="text-2xl font-light mt-4 px-4">{item.heading}</p>
              <p className="px-4 font-light text-sm text-slate-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondProduct;
