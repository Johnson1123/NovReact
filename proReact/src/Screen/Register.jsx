import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [file, setFile] = useState("");

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fname", formInput.fname);
    formData.append("lname", formInput.lname);
    formData.append("email", formInput.email);
    formData.append("phone", formInput.phone);
    formData.append("password", formInput.password);
    formData.append("confirmPassword", formInput.confirmPassword);
    formData.append("file", file);
    try {
      const res = await axios.post(
        "http://localhost:3000/app/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
      <h3>Register</h3>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
        method="post"
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="first name"
          name="fname"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="last name"
          name="lname"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="phone number"
          name="phone"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="confirm-password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <input type="file" name="file" onChange={onChangeFile} />
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default Register;
