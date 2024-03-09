import React from "react";
import ProductList from "@/components/shopPage/productListPage/ProductList";
import ProductListHeader from "@/components/shopPage/productListPage/ProductListHeader";
import { PRODUCTS_PAGE } from "@/constants/shopPageConstants";

const CategoryPage = () => {
  const productsData = PRODUCTS_PAGE;
  return (
    <>
      <ProductListHeader title={productsData.title} />
      <ProductList products={productsData.products} />
    </>
  );
};

export default CategoryPage;
