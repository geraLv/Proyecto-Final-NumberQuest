import React, { useState } from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";
import img6 from "../public/img/funcion2.png";
import { Navigate, Link } from "react-router-dom";

export const Actividad5p = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-gray-500");

  
  const handleValidation = () => {
    let response1Value = document.getElementById("response1").value;
    let response2Value = document.getElementById("response2").value;

   
    if (response1Value === "-inf;5" && response2Value === "1;inf") {
      setResponseMessage("¡Respuesta correcta!");
      setMessageColor("text-green-500");
    } else {
      setResponseMessage("Respuesta incorrecta");
      setMessageColor("text-red-500");
    }
  };

  return (
    <div className="container justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full">
        <ActivitieModel
          title="Dominio de Funciones"
          activitieNumber="Actividad 6)"
          guide="Recuerde que para escribir la respuesta no es necesario escribir paréntesis () o corchetes []"
          description="Teniendo en cuenta esta función, hallar el dominio de la función"
        />
        <div className="py-5">
          <img src={img6} className="" alt="" />
        </div>
        <InputResponse
          separar="U"
          answer1={"-inf;5"}
          answer2={"1;inf"}
          typeAnswer={true} 
          handleValidation={handleValidation}
          responseMessage={responseMessage} 
          messageColor={messageColor} 
        />
        <button
          className="h-10 w-40 mb-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
          onClick={() => null} 
        >
          Ayuda
        </button>
        <div className="flex gap-4 items-end">
          <button
            className="h-10 px-1 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/7" />}
          >
            <Link to="/actividad/7">Siguiente Actividad</Link>
          </button>
        </div>
      </div>

      <div className="my-4 flex bg-blue-gray-100 rounded-xl flex-row w-full">
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
          {[
            "x",
            "y",
            "z",
            "π",
            "^2",
            "^n",
            "√",
            "e",
            "<",
            ">",
            "a/b",
            "(",
            ")",
            "|.|",
            ",",
            "=",
          ].map((item) => (
            <button
              key={item}
              className="flex m-1 p-1 shadow-lg justify-center text-xl rounded items-center bg-white hover:scale-105 duration-100 ease-in"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
          {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "/", 0, ".", "="].map(
            (item) => (
              <button
                key={item}
                className="flex shadow-lg justify-center m-1 p-1 rounded text-xl items-center bg-white hover:scale-105 duration-100 ease-in"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
