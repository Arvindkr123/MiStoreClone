import React from "react";
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import data from './data/data.json'
import Slider from "./components/Slider";
import Offers from "./components/Offers.jsx";
// import './Style/Navb.jsxar.css'

const App = () => {
  return (
    <BrowserRouter>
          <PreNavbar />
          <Navbar />
          <Slider start={data.banner.start} />
          <Offers offer={data.offer} />
    </BrowserRouter>
  );
};

export default App;
