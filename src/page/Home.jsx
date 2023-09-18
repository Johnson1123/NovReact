import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import Avater from "../Avater";
import Header from "../component/Header";

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
      <Header />
      <Outlet />
      <footer>
        <h1>Hi Love Javascript</h1>
      </footer>
    </div>
  );
}

export default Home;
