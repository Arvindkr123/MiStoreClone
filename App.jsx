import React from "react";
import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import data from "./data/data.json";
import Slider from "./components/Slider";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProducts from "./components/StarProducts.jsx";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text={"STAR PRODUCTS"} />
      <StarProducts startProduct={data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu/>
    </BrowserRouter>
  );
};

export default App;
