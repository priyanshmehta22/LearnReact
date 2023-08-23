import React, { useState } from "react";

const TOGGLE = () => {
  const [style, setStyle] = useState("inline");
  const x = () => {
    setStyle(style === "inline" ? "none" : "inline");
  };
  return (
    <>
      {style === "inline" && <h1>THIS IS A TOGGLE TEXT</h1>}
      <button onClick={x}>SHOW/HIDE</button>
    </>
  );
};

export default TOGGLE;
