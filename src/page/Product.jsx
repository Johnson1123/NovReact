import React, { useState } from "react";
import Avater from "../Avater";

function Product() {
  const [user, setUser] = useState("");
  const [products, setProduct] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  return <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}></div>;
}

export default Product;
