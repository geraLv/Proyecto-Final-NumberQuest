import React from "react";
import "../index.css";
import NavBar from "./navbar";
import { Actividad } from "../activities/act";
import Layaut from "./layaut";
// import Teclado from "./teclado";
// import { Navbar } from "@material-tailwind/react";
import Footer from "./footer";
import { Actividad1p } from "../activities/act1p";
// import { Actividad3 } from "../activities/act3";

export function Activities() {
  return (
    <>
      <NavBar />
      <Layaut>
        {/* <Actividad3/> */}
        {/* <Actividad /> */}
        {/* <Teclado></Teclado> */}
        <Actividad1p></Actividad1p>
      </Layaut>
      <Footer></Footer>
    </>
  );
}
