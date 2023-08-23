import React, { useContext, useState } from "react";

const CHANGEUN = () => {
  const [newUN, setNewUN] = useState("");
  return (
    <>
      <input onChange={(event) => setNewUN(event.target.value)} />
      <button>CHANGE UN</button>
      <div>new un:</div>
    </>
  );
};

export default CHANGEUN;
