import React from "react";
import { ActivitieModel, Surrender, InputResponse } from "../hooks/allHooks";
import { Navigate, Link } from "react-router-dom";
export function Actividad4p() {
  return (
    <div>
      <ActivitieModel
        title="Dominio de funciones"
        activitieNumber="Actividad 4)"
        guide="puedes escribir números negativos"
        description="Observa atentamente y halla el dominio de la funcón"
      />
      <InputResponse answer1={-4} answer2={4} />
      <div className="flex gap-4 items-end">
        <Surrender className={"py-2 "} />
        <button
          className="h-10 w-40 mb-2   bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
          onClick={<Navigate to="/actividad/3" />}
        >
          <Link to="/actividad/6">Siguiente Actividad</Link>
        </button>
      </div>
    </div>
  );
}
