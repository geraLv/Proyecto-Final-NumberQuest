import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";

export const Actividad3p = () => {

    return (
        <>
            <div
                className="flex flex-col justify-center items-center w-full h-full"
            >
                <ActivitieModel
                    title='Multiplicación de decimales'
                    activitieNumber='Actividad 3)' 
                    guide='Recuerda multiplicar los números decimales como si fueran enteros y luego colocar la coma decimal en el lugar correcto.'
                    description='Resuelve la siguiente multiplicación de decimales: 2.5 × 1.4'
                    nImage={6}
                />
                <InputResponse
                    answer1={3.5}  
                />
                <Surrender/>
            </div>
        </>
    );
}
