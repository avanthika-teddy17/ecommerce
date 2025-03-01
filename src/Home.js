
import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Our E-Commerce Store</h1>
      <ProductList />
    </div>
  );
};

export default Home;