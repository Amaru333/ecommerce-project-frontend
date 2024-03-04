import { NEW_ARRIVALS_CONSTANT } from "@/constants/landingPageConstants";
import UIButton from "@/widgets/UIButton";
import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  return (
    <section className="h-screen flex flex-col justify-center text-black">
      <div className="screen-container text-center">
        <h1 className="text-7xl font-semibold">
          new <span className="text-blue-600">arrivals</span>
        </h1>
        <div className="grid grid-cols-4 gap-12 py-8">
          {NEW_ARRIVALS_CONSTANT.map((item, index) => (
            <div key={index} className="bg-white col-span-1 rounded-md pt-4 pb-6 hover:scale-105 transition-all">
              <Image src={item.image} height={1000} width={1000} alt={item.heading} className="rounded-md aspect-square" />
              <p className="text-2xl font-light mt-4 px-4">{item.heading}</p>
              <p className="px-4 font-light text-sm text-slate-500 mt-2">{item.description}</p>
              <p className="px-4 text-xs text-black mt-2">{item.price}</p>
              <div className="flex gap-x-4 mt-4 justify-center">
                <UIButton className="text-white">buy now</UIButton>
                <button className="text-blue-600 transition-all hover:opacity-80 active:scale-95">learn more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
