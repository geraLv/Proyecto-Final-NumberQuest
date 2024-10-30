import React from "react";
import "../index.css";
import NavBar from "./navbar";
import { Actividad } from "../activities/act";
import Layaut from "./layaut";
// import Teclado from "./teclado";
// import { Navbar } from "@material-tailwind/react";
import Footer from "./footer";
import Panqueque from "../activities/hook/useChoice";

export function Activities() {
  return (
    <>
      <NavBar />
      <Layaut>
        <Panqueque/>
        {/* <Actividad /> */}
        {/* <Teclado></Teclado> */}
      </Layaut>
      <Footer></Footer>
    </>
  );
}
