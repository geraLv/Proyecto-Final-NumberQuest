import React from "react";
import { ActivitieModel } from "../hooks/allHooks";


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
            answer1={-4}
            answer2={4}
            />
            <Surrender/>
        </div>
    )
}