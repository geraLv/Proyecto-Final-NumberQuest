import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";
import img2 from "../public/img/funcion2.png";
import { Navigate, Link } from "react-router-dom";
export const Actividad1p = () => {
  return (
    <div className="justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full">
        <ActivitieModel
          title="Dominio de funciones"
          activitieNumber="Actividad 1)"
          guide="puedes escribir números negativos"
          description="Observa atentamente y halla el dominio de la funcón"
        />
        <div className="py-5">
          <img src={img2} className="h-8 " alt="" />
        </div>

        <InputResponse
          className={"py-2 itmes-start"}
          answer1={-4}
          answer2={4}
        />
        <div className="flex gap-4 items-end">
          <Surrender className={"py-2 "} />
          <button
            className="h-10 w-40 mb-2   bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/3" />}
          >
            <Link to="/actividad/3">Siguiente Actividad</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
