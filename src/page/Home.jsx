import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Avater from "../Avater";

function Home() {
  const [feature, setFeature] = useState([]);
  const [products, setProducts] = useState([]);
  async function handleRequest() {
    let res = await axios.get("https://dummyjson.com/products");
    localStorage.setItem("products", JSON.stringify(res.data.products));
    setProducts(() => res.data.products);
    setFeature(() => res.data.products.slice(0, 5));
  }

  useEffect(() => {
    handleRequest();
  }, []);
  console.log(feature);
  return (
    <div>
      <header>
        <Link to="/product/">Product</Link>
      </header>
      <main>
        <div className="">
          <h2>Feature</h2>
          <div className="">
            {feature?.length == 0 ? (
              <p>Loading ....</p>
            ) : (
              <div style={{ display: "flex", gap: "20px" }}>
                {feature.map((item, i) => {
                  return <Avater item={item} key={i} />;
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <h1>Our Product</h1>
          {products.length == 0 ? (
            <p>Loading ...</p>
          ) : (
            <div>
              {products
                .filter((item) => item.category == "smartphones")
                .map((item, i) => {
                  return <Avater item={item} key={i} />;
                })}
            </div>
          )}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
