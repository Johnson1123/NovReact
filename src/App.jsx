import { useState } from "react";

import "./App.css";
import Avater from "./Avater";
import myAvater from "./assets/image/avater.jpg";
import Links from "./component/Links";

export function App() {
  const [toggle, setToggle] = useState(true);

  const changeToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      {/* <div className="">
        <Links>Home</Links>
        <Links>about</Links>
        <Links>contact</Links>
      </div> */}
      <form action="">
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />
        <input type="submit" value="Register" />
      </form>
      <div className="" style={{ display: "flex" }}>
        <Avater
          name="Segun Felix"
          image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avater
          name="Pastor Damilola"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avater
          name="Peace Maker"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avater name="Desmon Abdu" image={myAvater} />
      </div>

      <button onClick={changeToggle}>Change</button>
      <p>{toggle}</p>
    </>
  );
}

// export default App;
