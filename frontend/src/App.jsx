import React from "react";
import NavBar from "./components/navbar";
import "./index.css";
import Carousel from "./components/carusel.jsx";
import Layaut from "./components/layaut";
import Bloques from "./components/bloques.jsx";

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
