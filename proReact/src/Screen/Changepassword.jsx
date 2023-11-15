import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Changepassword() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  const [formInput, setFormInput] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", formInput.password);
    formData.append("newPassword", formInput.newPassword);
    formData.append("confirmNewPassword", formInput.confirmNewPassword);
    try {
      const token = JSON.parse(window.localStorage.getItem("token"));
      const res = await axios.post(
        "http://localhost:3000/app/change-password",
        formData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      window.localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>change Password</h3>
      <form action="">
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="newPassword"
          id=""
          placeholder="new password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmNewPassword"
          id=""
          placeholder="confirm password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>reset</button>
      </form>
    </div>
  );
}

export default Changepassword;
