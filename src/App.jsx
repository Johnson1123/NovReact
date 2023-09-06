import { useState } from "react";

import "./App.css";
import Avater from "./Avater";
import myAvater from "./assets/image/avater.jpg";
import Links from "./component/Links";

export function App() {
  const [password, SetPassword] = useState("");
  const [email, setEmail] = useState("");
  const [erremail, seterrEmail] = useState("");
  const [errpassword, SeterrPassword] = useState("");

  const error = {};
  const checkError = () => {
    if (email == "" || email.length < 3) {
      error.email = "email cannot empty or invalid email";
    }
    if (password == "" || password.length < 3) {
      error.password = "password is required or minimum of 3 charater";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkError();
    if (error.email) {
      seterrEmail(() => error.email);
    }
    if (error.password) {
      SeterrPassword(() => error.password);
    }
    if (erremail.email || errpassword) {
      return;
    } else localStorage.setItem("user", JSON.stringify({ email, password }));
  };
  let user;
  if (0) {
    user = {
      email: "yemi",
    };
  } else {
    user = {
      email: "isreal",
    };
  }
  console.log(user);

  // const deleteLocal = () => {
  //   localStorage.removeItem("user");
  // };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <br />
        <input
          type="email"
          name=""
          // onBlur={handleEmail}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className={`${error.email ? "error" : ""}`}
        />

        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          name=""
          id="email"
          className=""
          onChange={(e) => SetPassword(e.target.value)}
          style={{ height: "25px" }}
        />
        <p className="error">{errpassword}</p>
        <br />
        <input type="submit" value="Register" />
      </form>
      {user.email !== "yemi" || <p>{user.email + " " + "Adeyanju"}</p>}
      {/* <button onClick={deleteLocal}>delete Items</button> */}
    </>
  );
}

// export default App;
