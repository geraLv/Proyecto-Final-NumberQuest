import React from "react";
import "../index.css";
import NavBar from "./navbar";
import { Actividad } from "../activities/act";
import Layaut from "./layaut";
import Teclado from "./teclado";
// import { Navbar } from "@material-tailwind/react";
import Footer from "./footer";
import { Composición1 } from "../activities/comp";

export function Activities() {
  return (
    <>
      <NavBar />
      <Layaut>
        <Composición1/>
      </Layaut>
      <Teclado></Teclado>
      <Footer></Footer>
    </>
  );
}
