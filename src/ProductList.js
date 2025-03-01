import React from "react";
import laptop from "./laptop.png";
import smartphone from "./smartphone.jpg";
import headphones from "./headphone.jpg";
const products = [
  { id: 1, name: "Laptop", price: 999, description: "High-performance laptop with 16GB RAM." },
  { id: 2, name: "Smartphone", price: 599, description: "Latest 5G smartphone with OLED display." },
  { id: 3, name: "Headphones", price: 199, description: "Noise-canceling wireless headphones." }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={laptop}alt="Laptop"/>
          <img src={smartphone}alt="smartphone"/>
          <img src={headphone}alt="headphone"/>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
          <button>Add to Cart</button>
        </div>
    
         ))}
    
    </div>
  );
};

export default ProductList;