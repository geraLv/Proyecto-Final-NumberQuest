import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";

export const Actividad5p = () => {

    return (
        <>
            <div
                className="flex flex-col justify-center items-center w-full h-full"
            >
                <ActivitieModel
                    title='Suma de fracciones'
                    activitieNumber='Actividad 5)' 
                    guide='Recuerda que debes tener el mismo denominador para sumar fracciones'
                    description='Resuelve la siguiente suma de fracciones: 1/4 + 3/4'
                    nImage={5}
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
