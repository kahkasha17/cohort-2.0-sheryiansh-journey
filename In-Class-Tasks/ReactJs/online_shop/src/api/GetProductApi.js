import axios from "axios";

export const getProduct = async () => {
  const response = await axios.get("https://fakestoreapi.com/products/");
  return response.data;
};