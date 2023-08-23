import { useState, react } from "react";
import { User } from "./Users";
import REACTQUERY from "./REACTQUERY";

function PRACBASIC() {
  const names = ["a", "s", "d", "w"];
  const users = [
    { id: 1, name: "Alice", country: "Austria" },
    { id: 2, name: "Bob", country: "Belgium" },
    { id: 3, name: "Carl", country: "Canada" },
  ];
  return (
    <div>
      {/* {users.map((user) => {
        return <User name={user.name} country={user.country} />;
      })}
      <hr />
      <Job role="pri" salary={20} email="pri@gmail.com" />
      <Job role="ree" salary={22} email="ree@gmail.com" /> */}
      <REACTQUERY />
    </div>
  );
}

function arr(item) {
  return item;
}
function Job(props) {
  const name = "Priyansh";
  return (
    <>
      <div>{props.role}</div>
      <div>{props.salary}</div>
      <div>{props.email}</div>
      <hr />
    </>
  );
}

export default PRACBASIC;
