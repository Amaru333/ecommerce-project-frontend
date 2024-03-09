import { IProductListHeaderProps } from "@/interfaces/shopPageInterfaces";
import React from "react";

const ProductListHeader = ({ title }: IProductListHeaderProps) => {
  return (
    <div className="screen-container py-12">
      <p className="text-3xl">{title}</p>
    </div>
  );
};

export default ProductListHeader;
