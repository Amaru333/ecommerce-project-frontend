import { CATEGORIES } from "@/constants/shopPageConstants";
import Image from "next/image";
import React from "react";

const CategoriesSection = () => {
  return (
    <div className="screen-container grid grid-cols-4 gap-8 py-20">
      {CATEGORIES.map((category, index) => (
        <div key={index} className="flex flex-col items-center gap-y-4 bg-white p-4 group cursor-pointer">
          <div className="aspect-square flex items-center justify-center flex-1">
            <Image src={category.image} alt={category.name} className="w-auto scale-90 group-hover:scale-100 transition-all duration-1000" width={200} height={0} />
          </div>
          <p className="text-xl mt-4 group-hover:text-blue-600 transition-all">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
