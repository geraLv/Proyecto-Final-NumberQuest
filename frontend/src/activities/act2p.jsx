import React from "react";
import "../index.css";
import NavBar from "../components/navbar";
import Layaut from "../components/layaut";
import Footer from "../components/footer";
import { XD } from "../hooks/allHooks";

export function Actividad2p() {
return (
    <>
    <NavBar />
    <Layaut>
        <div>
        <XD
            title="Dominio de funciones"
            activitieNumber="Actividad 1)"
            guide="puedes escribir números negativos"
            description="Observa atentamente y halla el dominio de la funcón"
        />
        </div>
    </Layaut>
    <Footer></Footer>
    </>
);
}
