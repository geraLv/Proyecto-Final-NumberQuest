import React, { useState } from "react";
import { ActivitieModel, InputResponse } from "../hooks/allHooks";
import img3 from "../public/img/funcion3.png";
import { Navigate, Link } from "react-router-dom";

export function Actividad2p() {
  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-gray-500");

  // Acá laFunción que valida las respuestas
  const handleValidation = () => {
    let response1Value = document.getElementById("response1").value;
    let response2Value = document.getElementById("response2").value;

    // Acá valida las respuestas
    if (response1Value === "13" && response2Value === "1") {
      setResponseMessage("¡Respuesta correcta!");
      setMessageColor("text-green-500");
    } else {
      setResponseMessage("Respuesta incorrecta");
      setMessageColor("text-red-500");
    }
  };

  return (
    <div className="justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full">
        <ActivitieModel
          title="Dominio de funciones"
          activitieNumber="Actividad 3)"
          guide='"INFINITO" debe escribirse como "inf", en caso de ser negativo agreger un "-" al inicio'
          description="Observa atentamente y halla el dominio de la funcón"
        />
        <div className="py-5">
          <img src={img3} className=" " alt="" />
        </div>
        <div className="flex flex-col">
        <div className={`flex flex-col `}>
      <div className={` ${messageColor} my-2 text-lg font-semibold`}>
        {responseMessage}
      </div>
      <div className="flex space-x-2 items-center">
        <input
          type="text"
          id="response1"
          placeholder="-xx ; xx"
          maxLength={10}
          className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span className="text-xl">U</span>
        <input
          type="text"
          id="response2"
          placeholder="-xx ; xx"
          maxLength={10}
          className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex justify-start mt-4">
        <button
          onClick={handleValidation} // Llamamos la función de validación recibida desde el padre
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Responder
        </button>
      </div>
    </div>
          <button
            className="h-10 w-40 mb-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={() => null} 
          >
            Ayuda
          </button>
        </div>
        <div className="flex gap-4 items-end">
          <button
            className="h-10 px-1 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/4" />}
          >
            <Link to="/actividad/4">Siguiente Actividad</Link>
          </button>
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
    </div>
  );
}
