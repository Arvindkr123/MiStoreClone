import React from "react";
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
// import './Style/Navbar.css'

const App = () => {
  return (
    <BrowserRouter>
          <PreNavbar />
          <Navbar/>
    </BrowserRouter>
  );
};

export default App;
