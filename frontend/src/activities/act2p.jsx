import React from "react";

import NavBar from "../components/navbar";
import Layaut from "../components/layaut";
import Footer from "../components/footer";
import { ActivitieModel, InputResponse, Surrender } from "../hooks/allHooks";
// import { Surrender } from "../hooks/allHooks";

import { Navigate, Link } from "react-router-dom";

export function Actividad2p() {
  return (
    <>
      <div>
        <ActivitieModel
          title="Dominio de funciones"
          activitieNumber="Actividad 2)"
          guide='"INFINITO" se escribe "INF", se debe agregar el signo "+" o "-" al principio'
          description="Observa atentamente y halla el dominio de la funcón"
        />
        <InputResponse answer1={13} answer2={1} />
        <div className="flex gap-4 items-end">
          <Surrender />
          <button
            className="h-10 px-1  bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/4" />}
          >
            <Link to="/actividad/4">Siguiente Actividad</Link>
          </button>
        </div>
      </div>
    </>
  );
}
