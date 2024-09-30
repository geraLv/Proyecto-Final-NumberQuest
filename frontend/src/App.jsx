import React from "react";
import NavBar from "./components/navbar";
import "./index.css";
import { Carousel } from "bootstrap";
import Layaut from "./components/layaut";
import Boleques from "./components/bloques.jsx";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <Layaut>
        <Bloques></Bloques>
      </Layaut>
    </>
  );
}

export { App };
