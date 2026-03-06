import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../context/AllProductContext";
import Button from "../components/Button";

const Productsdetails = () => {

  const { id } = useParams();
  const { products } = useContext(Product);

  const product = products?.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 className="text-center mt-10 text-xl">Loading...</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="grid md:grid-cols-2 gap-10">

      
        <div className="flex justify-center items-center border rounded-lg p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

    
        <div className="flex flex-col justify-center">

          <h1 className="text-2xl font-bold mb-3">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-xl font-bold text-green-600 mb-4">
            ${product.price}
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Category: {product.category}
          </p>

          <Button
          name="Add to Cart"
          navigate={`/allProducts/productdetails/${product.id}`}
        />

        </div>

      </div>

    </div>
  );
};

export default Productsdetails;