import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { name } = useParams();
  console.log(name);
  return <div>PronameductDetails</div>;
}

export default ProductDetails;
