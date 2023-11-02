import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
function Header() {
  const navigate = useNavigate();
  const [cartLength, setCarLength] = useState(0);
  const checkCartLen = (item) => {
    const cartItem = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    setCarLength(cartItem.length);
  };

  const handleClick = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   checkCartLen();
  // }, []);
  return (
    <header style={{ display: "flex", gap: 5 }}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/product/"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        Product
      </NavLink>
      <NavLink
        to="/productDetail/1"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        product Details
      </NavLink>
      <NavLink
        to="about"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        About
      </NavLink>
      <div>
        <span>{cartLength}</span>
        <BsCartPlus size={25} color="green" />
      </div>
    </header>
  );
}

export default Header;
