import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
