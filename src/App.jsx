import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import SingleRoute from "./components/SingleRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
