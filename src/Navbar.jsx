import { useState, react } from "react";
import { User } from "./Users";
import Hooks from "./Hooks";
import ONCHANGE from "./ONCHANGE";
import TOGGLE from "./TOGGLE";
import APICALLS from "./APICALLS";
import PracAPI from "./PracAPI";
import USECONTEXT from "./USECONTEXT";
import PRACBASIC from "./PRACBASIC";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import CHANGEUN from "./CHANGEUN";

const Navbar = () => {
  return (
    <>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/toggle">TOGGLE</Link>
      <br />
      <Link to="/api">API</Link>
      <br />
      <Link to="/profile">profile</Link>
      <br />
      <Link to="/context">context</Link>
      <br />
      <Link to="/CHANGE">change</Link>
    </>
  );
};

export default Navbar;
