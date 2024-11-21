import React from "react";
import { ActivitieModel, InputResponse} from "../hooks/allHooks";
import img3 from "../public/img/funcion3.png";
import { Navigate, Link } from "react-router-dom";

export function Actividad2p() {
  return (
   <div className="justify-start w-full h-full">
   <div className="container flex flex-col w-full h-full">
        <ActivitieModel
          title="Dominio de funciones"
          activitieNumber="Actividad 3)"
          guide='"INFINITO" debe escribirse como "inf", en caso de ser negativo agreger un "-" al inicio'
          description="Observa atentamente y halla el dominio de la funcón"
        />
                                    <div className="py-5">
          <img src={img3} className=" " alt="" />
        </div>
        <InputResponse answer1={13} answer2={1} separar={"---"} typeAnswer={false} />
        <div className="flex gap-4 items-end">
          <button
            className="h-10 px-1  bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/4" />}
          >
            <Link to="/actividad/4">Siguiente Actividad</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
