import React from "react";

const Suggestions = () => {
  return (
    <section className="suggestions">
      <h3>You Might Also Like</h3>
      <div className="suggestions-grid">
        {/* Each Product */}
        <div className="suggestion-item">
          <img src="suggested-product-url" alt="Suggested Product" />
          <p>Product Name</p>
          <span>Price</span>
        </div>
        {/* More Products */}
      </div>
    </section>
  );
};

export default Suggestions;
