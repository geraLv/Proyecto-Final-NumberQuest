import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";

import { Navigate, Link } from "react-router-dom";
export const Actividad5p = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <ActivitieModel
          title="Suma de fracciones"
          activitieNumber="Actividad 5)"
          guide="Recuerda que debes tener el mismo denominador para sumar fracciones"
          description="Resuelve la siguiente suma de fracciones: 1/4 + 3/4"
          nImage={5}
        />
        <InputResponse answer1={1} answer2={4} />
      </div>
      <div className="flex gap-4 items-end">
        <Surrender className={"py-2 "} />
        <button
          className="h-10 w-40 mb-2   bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
          onClick={<Navigate to="/actividad/3" />}
        >
          <Link to="/actividad/7">Siguiente Actividad</Link>
        </button>
      </div>
    </div>
  );
};
