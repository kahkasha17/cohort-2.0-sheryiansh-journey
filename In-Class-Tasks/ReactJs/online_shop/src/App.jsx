import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Productsdetails from "./pages/Productsdetails";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/allProducts/productdetails/:id"element={<Productsdetails />}
        />{" "}
      </Routes>
    </div>
  );
};

export default App;
