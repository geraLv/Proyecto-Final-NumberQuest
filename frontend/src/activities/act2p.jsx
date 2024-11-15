import React from "react";
import "../index.css";
import NavBar from "../components/navbar";
import Layaut from "../components/layaut";
import Footer from "../components/footer";
import { ActivitieModel } from "../hooks/allHooks";

export function Actividad2p () {
    return (
        <>
              <NavBar />
      <Layaut>
        <div>
            <ActivitieModel
            title='Dominio de funciones'
            activitieNumber='Actividad 2)' 
            guide='"INFINITO" se escribe "INF", se debe agregar el signo "+" o "-" al principio' 
            description='Observa atentamente y halla el dominio de la funcón'
            />

            </div>
      </Layaut>
      <Footer></Footer>

        </>
    );
}