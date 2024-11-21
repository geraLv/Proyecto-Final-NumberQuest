import React, { useState } from "react";
import { Surrender, ActivitieModel, InputEdit, CheckResponse } from "../hooks/allHooks";

import { Navigate, Link } from "react-router-dom";
export const Actividad6p = () => {

    const [selectedValue, setSelectedValue] = useState(null); 
    const handleCheckboxChange = (value) => {
      setSelectedValue(value === selectedValue ? null : value);  
    };
    return (
        <>
            <div
                className="flex flex-col justify-center items-center w-full h-full"
            >
                <ActivitieModel
                    title='Multiplicación de decimales'
                    activitieNumber='Actividad 6)' 
                    guide='Elija una de las opciones'
                    description='Resuelve la siguiente multiplicación de decimales: 2.5 × 1.4'
                    nImage={5}
                />
                <ul>
                    <li>
                    <InputEdit 
                    value="Correcto" 
                    selectedValue={selectedValue} 
                    onChange={handleCheckboxChange}
                    responseExpose={"(-infinito ; +infinito)"}
                    />
                    </li>
                    <li>
                    <InputEdit 
                    value="Incorrecto0" 
                    selectedValue={selectedValue} 
                    onChange={handleCheckboxChange}
                    responseExpose={"( 0 ; +infinito)"}
                    />
                    </li>
                    <li>
                    <InputEdit 
                    value="Incorrecto1" 
                    selectedValue={selectedValue} 
                    onChange={handleCheckboxChange}
                    responseExpose={"(-infinito ; 2)"}
                    />
                    </li>
                    <li>
                    <InputEdit 
                    value="Incorrecto2" 
                    selectedValue={selectedValue} 
                    onChange={handleCheckboxChange}
                    responseExpose={"(-2 ; +infinito)"}
                    />
                    </li>

                        <CheckResponse selectedValue={selectedValue}/>
                </ul>
                <Surrender/>
            </div>
        </>
    );
}
