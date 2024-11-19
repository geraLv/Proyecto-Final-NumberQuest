import React from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";

export const Actividad1p = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            {/* Contenedor principal con el Layout */}
            <div className="w-full max-w-3xl px-8 py-8 shadow-black shadow-md bg-light rounded-xl">
                {/* Actividad: Título, guía, descripción */}
                <ActivitieModel
                    title="Dominio de funciones"
                    activitieNumber="Actividad 1)"
                    guide="Puedes escribir números negativos"
                    description="Observa atentamente y halla el dominio de la función"
                    className="w-full bg-white p-8 rounded-xl shadow-md space-y-4 text-center"
                />
                <InputResponse
                    answer1={-4}
                    answer2={4}
                    className="mt-6 p-6 bg-blue-50 rounded-md shadow-md"
                />

                <Surrender className="mt-6 flex justify-between w-full max-w-sm mx-auto" />
            </div>
        </div>
    );
};
