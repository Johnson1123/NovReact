import React from "react";

function Button() {
  return (
    <button
      style={{
        background: "green",
        padding: "7px 20px",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={() => handleAddToCart(item)}
    >
      Add to cart
    </button>
  );
}

export default Button;
