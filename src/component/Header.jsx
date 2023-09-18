import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

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
      <button onClick={handleClick}>Go Home</button>
    </header>
  );
}

export default Header;
