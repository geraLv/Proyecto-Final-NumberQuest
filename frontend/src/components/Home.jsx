import React from "react";
import Navbar from "./navbar";
import "../index.css";
import { CarouselDefault } from "./carusel";
import Layaut from "./layaut";
import Bloques from "./bloques";
import Footer from "./footer";
import { MenuDefault } from "@material-tailwind/react";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <CarouselDefault />
      <Layaut>
        <Bloques />
      </Layaut>
      <Footer />
    </div>
  );
}

export default Home;
