import { PRODUCTS_PAGE } from "@/constants/shopPageConstants";
import React from "react";
import ProductCard from "./ProductCard";
import { IProductListProps } from "@/interfaces/shopPageInterfaces";

const ProductList = ({ products }: IProductListProps) => {
  return (
    <div className="screen-container grid grid-cols-4 gap-8 pb-20">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
