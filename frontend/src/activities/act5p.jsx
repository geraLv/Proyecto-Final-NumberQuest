import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";

import { Navigate, Link } from "react-router-dom";
export const Actividad5p = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <ActivitieModel
                title="Dominio de Funciones"
                activitieNumber="Actividad 5)"
                guide="Recuerde que para escribir la respuesta no es necesario escribir paréntesis () o corchetes []"
                description="Teniendo en cuenta esta función, hallar el dominio de la función"
                nImage={1}
            />
            <InputResponse
                separar="U"
                answer1={"-inf;5"}
                answer2={"1;inf"}
                typeAnswer={true} 
            />
            <Surrender />
        </div>
    );
};
