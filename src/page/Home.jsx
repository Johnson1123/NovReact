import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/product/">Product</Link>
    </div>
  );
}

export default Home;
