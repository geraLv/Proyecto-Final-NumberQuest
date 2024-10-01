import React from "react";
import NavBar from "./components/navbar";
import "./app.css";
import { CarouselDefault } from "./components/carusel.jsx";
import Layaut from "./components/layaut";
import Bloques from "./components/bloques.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <NavBar>
        <Bloques />
      </NavBar>
      <CarouselDefault />
      <Layaut>
        <Bloques></Bloques>
      </Layaut>
      <Footer />
    </>
  );
}

export { App };
