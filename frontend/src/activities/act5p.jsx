import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";

export const Actividad5p = () => {

    return (
        <>
            <div
                className="flex flex-col justify-center items-center w-full h-full"
            >
                <ActivitieModel
                    title='Dominio de Funciones'
                    activitieNumber='Actividad 5)' 
                    guide='Recuerda que debes tener el mismo denominador para sumar fracciones'
                    description='Teniendo en cuenta esta función, hallar el dominio de la función'
                    nImage={2}
                />
                <InputResponse
                    answer1={1}  
                    answer2={4} 
                />
                
                <Surrender/>
            </div>
        </>
    );
}
