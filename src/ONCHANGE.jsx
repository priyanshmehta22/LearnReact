import React, { useContext, useState } from "react";

const ONCHANGE = () => {
  const [val, setVal] = useState("");

  const x = (event) => {
    setVal(event.target.value);
  };
  return (
    <>
      <input type="text" onChange={x} />
      <div>{val}</div>
    </>
  );
};

export default ONCHANGE;
