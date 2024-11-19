import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";


export const Actividad1p  = () => {


    return(
        <>
        <div
        className="flex flex-col justify-center items-center w-full h-full"
        >
            <ActivitieModel
            title='Dominio de funciones'
            activitieNumber='Actividad 1)' 
            guide='puedes escribir números negativos' 
            description='Observa atentamente y halla el dominio de la funcón'
            />
        
            <InputResponse
            answer1={-4}
            answer2={4}
            />
            <Surrender/>

            
        </div>
        </>
    )

}