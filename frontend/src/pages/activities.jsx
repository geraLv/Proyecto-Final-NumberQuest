import React from "react";
import NavBar from "../components/navbar";
import { Actividad } from "../components/act";
import Layaut from "../components/layaut";
import Teclado from "../components/teclado";
import Footer from "../components/footer";

export function Activities() {
  return (
    <>
      <NavBar />
      <Layaut>
        <Actividad />
        <Teclado></Teclado>
      </Layaut>
      <Footer></Footer>
    </>
  );
}
