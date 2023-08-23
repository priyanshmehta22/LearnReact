import React, { useState, useEffect } from "react";
import Axios from "axios";
//useEffect runs twice as it mounts and unmounts and then mounts again.
const APICALLS = () => {
  const [fact, getFact] = useState("");
  const fetchFact = () => {
    async function api() {
      const x = await Axios.get("https://catfact.ninja/fact").then((res) => {
        getFact(res.data.fact);
      });
    }
    api();
  };
  useEffect(() => {
    fetchFact();
  }, []);
  return (
    <>
      <div>{fact}</div>
      <button onClick={fetchFact}>Fetch new Fact</button>
    </>
  );
};

export default APICALLS;
