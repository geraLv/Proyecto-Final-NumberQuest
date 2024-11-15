import React from "react";
import "../index.css";
import NavBar from "./navbar";
import Layaut from "./layaut";
import Footer from "./footer";
import { Actividad1p } from "../activities/act1p";
// import { Actividad3 } from "../activities/act3";

export function Activities() {
  return (
    <>
      <NavBar />
      <Layaut>
        <Actividad1p/>
        {/* <Actividad3/> */}
      </Layaut>
      <Footer></Footer>
    </>
  );
}
