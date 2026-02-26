import React from "react";
import "../styles/PopularCategoryCard.css";

function PopularCategoryCard({
  image,
  title,
  subtitle,
  price,
  onAddToCart,
  actionType = "button", // default is button
  hideAddToCart = false, // default false
}) {
  return (
    <>
      {/* cards */}
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        <div className="card-price-container">
          {price && <p className="card-price">₦{price}</p>}
          {/* Render button */}
          {onAddToCart && actionType === "button" && !hideAddToCart && (
            <button className="add-to-cart-button" onClick={onAddToCart}>
              Add to Cart
            </button>
          )}

          {/* Render icon */}
          {onAddToCart && actionType === "icon" && !hideAddToCart && (
            <div className="add-icon" onClick={onAddToCart}>
              +
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PopularCategoryCard;
