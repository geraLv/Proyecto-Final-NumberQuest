import React from "react";
import { ActivitieModel, InputResponse } from "../hooks/allHooks";

export function Actividad2p () {
    return (
        <>
              
        <div>
            <ActivitieModel
            title='Dominio de funciones'
            activitieNumber='Actividad 2)' 
            guide='"INFINITO" se escribe "INF", se debe agregar el signo "+" o "-" al principio' 
            description='Observa atentamente y halla el dominio de la funcón'
            nImage={2}
            />
            <InputResponse
            answer1={13}
            answer2={1}
            separar={"---"}
            typeAnswer={false}
            />
            <Surrender/>
            </div>
        </>
    );
}