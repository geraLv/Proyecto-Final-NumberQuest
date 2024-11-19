import React from "react";
import Navbar from "../components/navbar";
import { CarouselWithContent } from "../components/carusel";
import Bloques from "../components/bloques";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <CarouselWithContent />
      <Bloques />
      <Footer />
    </>
  );
}

export default Home;
