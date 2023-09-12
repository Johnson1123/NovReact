import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avater from "../Avater";

function ProductDetails() {
  const para = useParams();
  const id = para.id;
  const [product, setProduct] = useState("");

  const handleProduct = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    const gt = products.filter((item) => item.id == id);
    setProduct(gt);
  };

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <div>
      <img src={product[0]?.images[0]} alt="" />
      <p>{product[0]?.title}</p>
    </div>
  );
}

export default ProductDetails;
