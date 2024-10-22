import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>SHOP.CO</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
