import React, { useState } from "react";
import "./CSS/main.css";

const Midterm = () => {
  const [text, setText] = useState("sdf");
  const [color, setColor] = useState("btn-click");

  const toggleChanges = () => {
    setText(text === "sdf" ? "GULLEM" : "sdf");
    setColor(color === "btn-click" ? "btn-click-active" : "btn-click");
  };

  return (
    <div className="parent">
      <h1>{text}</h1>
      <button className={color} onClick={toggleChanges}>
        CLICK
      </button>
    </div>
  );
};

export default Midterm;