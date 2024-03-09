"use client";

import { SHOP_ROUTE } from "@/constants/routeConstants";
import { CATEGORIES } from "@/constants/shopPageConstants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CategoriesSection = () => {
  const router = useRouter();
  return (
    <div className="screen-container grid grid-cols-4 gap-8 py-20">
      {CATEGORIES.map((category, index) => (
        <div key={index} className="flex flex-col items-center gap-y-4 bg-white p-4 group cursor-pointer" onClick={() => router.push(SHOP_ROUTE + category.slug)}>
          <div className="aspect-square flex items-center justify-center flex-1">
            <Image src={category.image} alt={category.name} className="w-auto" width={200} height={0} />
          </div>
          <p className="text-xl mt-4 group-hover:text-blue-600 transition-all">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
