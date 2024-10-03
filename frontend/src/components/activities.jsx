import React from "react";
import "../index.css";
import NavBar from "./navbar";
import {Actividad} from "./act"
import Layaut from "./layaut"
// import { Navbar } from "@material-tailwind/react";
import Footer from "./footer";


export function Activities() {
    return(
        <>
        <NavBar />
        <Layaut>
            <Actividad/>
        </Layaut>
        <Footer></Footer>
        </>
    )
}