import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";
import img6 from "../public/img/funcion2.png";
import { Navigate, Link } from "react-router-dom";
export const Actividad5p = () => {
    return (
        <div className="justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full"></div>
            <ActivitieModel
                title="Dominio de Funciones"
                activitieNumber="Actividad 6)"
                guide="Recuerde que para escribir la respuesta no es necesario escribir paréntesis () o corchetes []"
                description="Teniendo en cuenta esta función, hallar el dominio de la función"
            />
                    <div className="py-5">
          <img src={img6} className="" alt="" />
        </div>
            <InputResponse
                separar="U"
                answer1={"-inf;5"}
                answer2={"1;inf"}
                typeAnswer={true} 
            />
        <div className="flex gap-4 items-end">
          <button
            className="h-10 w-40 mb-2   bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/7" />}
          >
            <Link to="/actividad/7">Siguiente Actividad</Link>
          </button>
        </div>
        </div>
    );
};
