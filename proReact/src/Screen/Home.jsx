import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <li>Home</li>
      <Link to="/dashboard">Dashbord</Link>
    </div>
  );
}

export default Home;
