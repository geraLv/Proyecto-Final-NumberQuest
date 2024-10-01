import React from "react";
import "./index.css";
import NavBar from "./components/navbar";
import {Actividad} from "./components/act"
import Layaut from "./components/layaut"
import { Navbar } from "@material-tailwind/react";
import Footer from "./components/footer";


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