import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import Avater from "../Avater";
import Header from "../component/Header";
import VideoUpload from "../../proReact/src/Screen/Home";

function Home() {
  return (
    <div>
      {/* <Header />
      <Outlet />
      <footer>
        <h1>Hi Love Javascript</h1>
      </footer> */}
      <VideoUpload />
    </div>
  );
}

export default Home;
