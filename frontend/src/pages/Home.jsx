import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { CarouselWithContent } from "../components/carusel";
import Bloques from "../components/bloques";
import Footer from "../components/footer";

function Home() {
  const [usuario, setUsuario] = useState({ loggedIn });
  useEffect(() => {
    fetch("http://localhost:4000/session", {
      credentials: "include",
    })
      .then((respuesta) => respuesta.json)
      .then((respuesta) => setUsuario(respuesta));
  }, []);
  console.log("hola");
  console.log({ setUsuario });
  if (setUsuario({ loggedIn: false })) {
    return setUsuario.window.location.href("http://localhost:5173/login");
  }
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
