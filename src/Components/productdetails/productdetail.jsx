import React from "react";

const ProductDetails = () => {
  return (
    <section className="product-details">
      <div className="container">
        <div className="image-section">
          <img src="product-image-url" alt="Product" />
          {/* Thumbnail Images */}
        </div>
        <div className="details-section">
          <h2>One Life Graphic T-Shirt</h2>
          <p className="price">
            <span className="old-price">$250</span> <span className="new-price">$200</span>
          </p>
          {/* Color and Size Selection */}
          <div className="options">
            <label>Color: </label>
            <button className="color-btn active">Green</button>
            <button className="color-btn">Blue</button>
            {/* More color options */}
          </div>
          <div className="sizes">
            <label>Size: </label>
            <button className="size-btn">S</button>
            <button className="size-btn">M</button>
            <button className="size-btn">L</button>
          </div>
          {/* Add to Cart */}
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
