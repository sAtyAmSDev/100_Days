import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import Navbar from "./Components/Layout/Navbar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" flex justify-center items-center flex-col bg-white dark:bg-[#0d102d] ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
