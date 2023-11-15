import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const logout = () => {
    window.localStorage.clear();
  };
  return (
    <div>
      <li>Home</li>
      <Link to="/dashboard">Dashbord</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
