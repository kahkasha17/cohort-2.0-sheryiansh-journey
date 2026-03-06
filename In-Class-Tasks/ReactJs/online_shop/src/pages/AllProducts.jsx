import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import { Product } from "../context/AllProductContext";

const AllProducts = () => {
  const { products } = useContext(Product);

  return (
    <>
      <h1 className="flex justify-center p-2 text-2xl font-extrabold">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
