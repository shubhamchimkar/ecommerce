import React from "react";

const Reviews = () => {
  return (
    <section className="reviews">
      <h3>Reviews</h3>
      {/* Each Review */}
      <div className="review">
        <p>Review Text Here...</p>
        <span>Rating: 4/5</span>
      </div>
      {/* More reviews */}
    </section>
  );
};

export default Reviews;
