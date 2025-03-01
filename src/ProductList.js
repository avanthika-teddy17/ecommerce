import React from "react";
import laptop from "./laptop.png";
import smartphone from "./smartphone.jpg";
import headphone from "./headphone.jpg";
const products = [
  { id: 1, name: "Laptop", price: 999, description: "High-performance laptop with 16GB RAM." },
  { id: 2, name: "Smartphone", price: 599, description: "Latest 5G smartphone with OLED display." },
  { id: 3, name: "headphone", price: 199, description: "Noise-canceling wireless headphones." }
];

const product =()=>{

  return (
    <div>
  
      <div className="container">
        <div className="card">
         <img src={laptop}alt="laptop"/>
         <h3>laptop</h3>
         <p>$1300</p>
         <button>Add to cart</button> 
      </div>

      <div className="card">
         <img src={smartphone}alt="smartphone"/>
         <h3>smartphone</h3>
         <p>$150</p>
         <button>Add to cart</button> 
      </div>

      <div className="card">
         <img src={headphone}alt="headphone"/>
         <h3>headphone</h3>
         <p>$200</p>
         <button>Add to cart</button> 
      </div>

      
      </div>
      </div>
);
};


<div/>

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={laptop}alt="Laptop"/>
          <img src={smartphone}alt="Smartphone"/>
          <img src={headphone}alt="headphone"/>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
          <button>Add to Cart</button>
        </div>
    
         ))}
    
    </div>
  );
};

export default ProductList;