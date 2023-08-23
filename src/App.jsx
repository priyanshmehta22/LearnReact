import { useState, react, createContext } from "react";
import { User } from "./Users";
import Hooks from "./Hooks";
import ONCHANGE from "./ONCHANGE";
import TOGGLE from "./TOGGLE";
import APICALLS from "./APICALLS";
import PracAPI from "./PracAPI";
import USECONTEXT from "./USECONTEXT";
import PRACBASIC from "./PRACBASIC";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CHANGEUN from "./CHANGEUN";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<PRACBASIC />} />
            <Route path="/toggle" element={<TOGGLE />} />
            <Route path="/api" element={<APICALLS />} />
            <Route path="/context" element={<USECONTEXT />} />
            <Route path="/CHANGE" element={<CHANGEUN />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
