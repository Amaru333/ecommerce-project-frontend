import { calculateDiscount, intToDollars } from "@/functions/commonFunctions";
import { IProductCardProps } from "@/interfaces/shopPageInterfaces";
import ColorGroup from "@/widgets/ColorGroup";
import RatingStars from "@/widgets/RatingStars";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: IProductCardProps) => {
  const discountRate = calculateDiscount(product?.cost_price, product?.selling_price);
  return (
    <div className="rounded-md shadow-md border-slate-300 bg-white">
      <Image src={product?.image} alt={product?.name} width={500} height={500} className="rounded-md" />
      <div className="py-4 px-6">
        <p className="text-lg">{product?.name}</p>
        <div className="flex items-center gap-x-1 mb-1">
          <RatingStars rating={product?.rating} />
          <p className="text-slate-400 text-xs -mb-0.5">{product?.rating}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm">{intToDollars(product?.selling_price)}</p>
            {parseFloat(discountRate) > 0 && (
              <div className="flex items-center gap-x-2">
                <p className="text-[0.625rem] text-slate-500 line-through">{intToDollars(product?.cost_price)}</p>
                <div className="text-[0.625rem] bg-red-400 border border-red-500 rounded text-white w-fit px-1">
                  <p>{discountRate}% off</p>
                </div>
              </div>
            )}
          </div>
          <ColorGroup colors={product?.colors} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
