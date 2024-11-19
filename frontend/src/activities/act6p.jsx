import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";

import { Navigate, Link } from "react-router-dom";
export const Actividad6p = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <ActivitieModel
          title="Multiplicación de decimales"
          activitieNumber="Actividad 6)"
          guide="Recuerda multiplicar los números decimales como si fueran enteros y luego colocar la coma decimal en el lugar correcto."
          description="Resuelve la siguiente multiplicación de decimales: 2.5 × 1.4"
          nImage={6}
        />
        <InputResponse answer1={3.5} />
      </div>
      <div className="flex gap-4 items-end">
        <Surrender className={"py-2 "} />
        <button
          className="h-10 w-40 mb-2   bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
          onClick={<Navigate to="/temas/3" />}
        >
          <Link to="/temas/3">Volver al menú</Link>
        </button>
      </div>
    </>
  );
};
