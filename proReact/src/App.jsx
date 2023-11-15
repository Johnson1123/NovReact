import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screen/Login";
import Register from "./screen/Register";
import Dashbord from "./screen/Dashbord";
import ProtectedRoute from "./utils/ProtectedRoute";
import Update from "./screen/UpdateUser";
import Changepassword from "./screen/Changepassword";
import Home from "./Screen/Home";
export function App() {
  const [products, setproduct] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashbord />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update-user"
            element={
              <ProtectedRoute>
                <Update />
              </ProtectedRoute>
            }
          />
          <Route
            path="/change-password"
            element={
              <ProtectedRoute>
                <Changepassword />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
