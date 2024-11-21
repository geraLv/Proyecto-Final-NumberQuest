import React from "react";
import { ActivitieModel, Surrender, InputResponse } from "../hooks/allHooks";
import { Navigate, Link } from "react-router-dom";
export function Actividad4p() {

    return (
        <div>
              <ActivitieModel
            title='Dominio de funciones'
            activitieNumber='Actividad 4)' 
            guide='puedes escribir números negativos' 
            description='Observa atentamente y halla el dominio de la funcón'
            />
            <InputResponse
            Separar= "---"
            answer1={-4}
            answer2={4}
            tyeAnswer={false}
            />
            <Surrender/>
        </div>
    )
}
