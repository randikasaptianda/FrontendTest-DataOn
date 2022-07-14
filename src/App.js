import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Home/Login";
import SignUp from "./Home/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/main" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
