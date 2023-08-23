import React from "react";
import { useState } from "react";

const Hooks = () => {
  const [iscount, setiscount] = useState(0);
  const incCount = () => {
    setiscount(iscount + 1);
  };
  const decCount = () => {
    setiscount(iscount - 1);
  };
  const zero = () => {
    setiscount(0);
  };
  return (
    <>
      <div>
        <div>{iscount}</div>
        <button onClick={incCount}>Inc Button</button>
        <button onClick={decCount}>Inc Button</button>
        <button onClick={zero}>Inc Button</button>
      </div>
    </>
  );
};

export default Hooks;
