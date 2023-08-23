import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const REACTQUERY = () => {
  const { data } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default REACTQUERY;
