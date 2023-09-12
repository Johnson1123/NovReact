import React, { useState } from "react";
import Avater from "../Avater";

function Product() {
  const [user, setUser] = useState("");
  const [products, setProduct] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products ? (
        products.map((item, i) => {
          return <Avater item={item} key={i} />;
        })
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default Product;
