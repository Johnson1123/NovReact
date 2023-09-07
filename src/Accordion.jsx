import React, { useState } from "react";

export default function Accordion() {
  const [display, setDisplay] = useState(0);
  return (
    <div>
      <div className="">
        <button onClick={() => setDisplay(0)}>Contact</button>
        <button onClick={() => setDisplay(1)}>About</button>
        <button onClick={() => setDisplay(2)}>Dashboard</button>
      </div>
      <div className="content">
        {display == 0 && (
          <div>
            <h1>Contact</h1>
          </div>
        )}
        {display == 1 && (
          <div>
            <h1>About US</h1>
          </div>
        )}
        {display == 2 && (
          <div>
            <h1>Dashboard</h1>
          </div>
        )}
      </div>
    </div>
  );
}
