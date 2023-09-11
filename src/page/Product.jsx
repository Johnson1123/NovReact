import React, { useState } from "react";

function Product() {
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <div>
      <h1>Product</h1>
      <button onClick={() => setUser("Apostle")}>Click</button>
    </div>
  );
}

export default Product;
