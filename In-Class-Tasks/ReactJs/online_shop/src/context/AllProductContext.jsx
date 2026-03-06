import React, { createContext, useEffect, useState } from "react";
import { getProduct } from "../api/GetProductApi";

export const Product = createContext();

export const AllProductContext = ({ children }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = async () => {
      const data = await getProduct();
      setProducts(data);
      console.log(data);
    };

    getProducts();

  }, []);

  return (
    <Product.Provider value={{ products }}>
      {children}
    </Product.Provider>
  );
};