import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  let fname;
  let lname;
  let email;
  let phone;

  const [formInput, setFormInput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fname", formInput.fname);
    formData.append("lname", formInput.lname);
    formData.append("email", formInput.email);
    formData.append("phone", formInput.phone);
    formData.append("id", profile?._id);
    try {
      const res = await axios.post(
        "http://localhost:3000/app/update-user",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.localStorage.setItem("user", await JSON.stringify(res.data));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const fetchUser = async () => {
    const token = JSON.parse(window.localStorage.getItem("token"));

    const res = await axios.get("http://localhost:3000/app/get-user", {
      headers: {
        Authorization: `${token}`,
      },
    });
    setProfile(res.data.data._doc);
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
          // value={formInput.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="last name"
          name="lname"
          // value={formInput.lname}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          // value={formInput.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="phone number"
          name="phone"
          // value={formInput.phone}
          onChange={handleChange}
        />
        <input type="hidden" value={profile?._id} name="id" />

        <button onClick={handleSubmit}>Update</button>
      </form>
    </div>
  );
}

export default Update;
