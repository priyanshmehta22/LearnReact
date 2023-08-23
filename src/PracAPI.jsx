import React, { useEffect, useState } from "react";
import Axios from "axios";

const PracAPI = () => {
  const [age, setAge] = useState(0);

  const apicall = () => {
    const id = document.getElementById("username").value;
    Axios.get(`https://api.agify.io/?name=${id}`).then((res) => {
      setAge(res.data.age);
    });
  };
  useEffect(() => {
    apicall();
  });

  return (
    <>
      <div>
        <input id="username" type="text" />
        <button onClick={apicall}>CALL</button>
        <div>{age}</div>
      </div>
    </>
  );
};

export default PracAPI;
