import React from "react";
import Navbar from "../components/navbar";
import { CarouselWithContent } from "../components/carusel";
import Bloques from "../components/bloques";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="bg-[url('https://wallpaperaccess.com/full/237630.jpg')]">
      <Navbar></Navbar>
      <CarouselWithContent />
      <Bloques />
      <Footer />
    </div>
  );
}

export default Home;
