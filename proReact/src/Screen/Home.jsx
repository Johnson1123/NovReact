import { useState } from "react";
import "./Home.css";
import ProductCard from "../component/ProductCard";

function Home() {
  let display;
  const Logo = "ProDev";
  const image = {
    image1:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/65/5826752/1.jpg?4963",
  };

  const product = [];

  const [name, setName] = useState(1);
  const [fname, setFName] = useState("");
  const [email, setEmail] = useState("");

  const emailInput = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const fnameInput = (e) => {
    setFName(e.target.value);
    console.log(fname);
  };

  const changeName = () => {
    setName(() => name + 1);
  };

  const validate = (e) => {
    e.preventDefault();
    if (fname === "") {
    }
  };

  return (
    <div>
      <header
        className="header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2>{Logo}</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <div className="" style={{ display: "flex" }}>
        <ProductCard
          image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/65/5826752/1.jpg?4963"
          name="Iphone 15"
          price="#1750000"
        />

        {/* {product.length > 0 && (
          <ProductCard
            image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/5238922/1.jpg?4326"
            name="Infinix Note 30 Pro"
            price="#90,500:00"
          />
        )} */}
        {/* {product.length == 0 || (
          <ProductCard
            image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/5238922/1.jpg?4326"
            name="Infinix Note 30 Pro"
            price="#90,500:00"
          />
        )} */}
        {/* {!product.length === 0 || (
          <ProductCard
            image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/5238922/1.jpg?4326"
            name="Infinix Note 30 Pro"
            price="#90,500:00"
          />
        )} */}

        {product ? (
          <ProductCard
            image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/5238922/1.jpg?4326"
            name="Infinix Note 30 Pro"
            price="#90,500:00"
          />
        ) : (
          ""
        )}

        {/* <ProductCard />
        <ProductCard />  */}

        {/* ---------------- UseState  -------------- */}
      </div>
      <p>{name}</p>
      <button onClick={changeName}>ChangeName</button>
      <form action="">
        <input type="text" placeholder="fname" onChange={fnameInput} />
        <input
          type="text"
          name=""
          id=""
          placeholder="email"
          onChange={emailInput}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Home;
