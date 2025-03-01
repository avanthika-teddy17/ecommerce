import React from "react";
import "./Style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">E-Shop</div>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <input type="text" placeholder="Search products..." className="search-bar" />
    </nav>
  );
};

export default Navbar;