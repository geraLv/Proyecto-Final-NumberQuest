import React, { useState } from "react";
import { InputResponse, ActivitieModel } from "../hooks/allHooks";
import img2 from "../public/img/funcion1p.png";
import { Navigate, Link } from "react-router-dom";

export const Actividad1p = () => {
  const [openHelp, setOpenHelp] = useState(false);

 
  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-gray-500");

  const handleValidation = () => {
    let response1Value = document.getElementById("response1").value;
    let response2Value = document.getElementById("response2").value;

 
    if (response1Value === "(-inf,0]" && response2Value === "[1/4,inf)") {
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
          title={"Dominio de funciones "}
          activitieNumber="Actividad 2)"
          guide="Reacuerda que debes poner los parentesis '()' o corechetes '[]' según corresponda"
          description="Siguiendo el ejemplo de la anterior actividad, observa atentamente y halla el dominio de la funcón:"
        />
        <div className="py-5">
          <img src={img2} className="" alt="" />
        </div>
        {openHelp ? (
          <div>
            <div className="container border-2 border-blue-gray-400 rounded p-3 my-3 bg-gray-200">
              <h1 className="text-2xl text-blue-800">Resolucion:</h1>
              <br />
              <h1 className="text-black text-xl">
                El dominio de la función f ( x ) = 2 x − √(4x^2 − x) está
                determinado por la condición de que el radicando debe ser mayor
                o igual a cero: 4 x^2 − x ≥ 0
              </h1>
              <br />
              <h1 className="text-blue-800 text-2xl">4 x^2 − x ≥ 0 </h1>
              <br />
              <h1 className="text-black text-xl">Factorizando, obtenemos:</h1>
              <br />
              <div className="flex">
                <h1 className="text-blue-800 text-2xl"> x ( 4 x − 1 ) ≥ 0 </h1>
              </div>
              <br />
              <h1 className="flex">
                Por lo tanto, el dominio de la función es:
              </h1>
              <div className="flex gap-2 my-2">
                <h1 className="text-blue-800 text-2xl"> ( − ∞ , 0 ]</h1>
                <h1 className="text-black text-2xl">U</h1>{" "}
                <h1 className="text-blue-800 text-2xl">[ 1/4 , ∞ )</h1>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-col">
          <InputResponse
            typeAnswer={true}
            separar="U"
            className={"py-2 items-start"}
            answer1="(-inf,0]"
            answer2="[1/4,inf)"
            handleValidation={handleValidation} // Acá pasa la función de validación
            responseMessage={responseMessage}   // Este da el mensaje de respuesta
            messageColor={messageColor}         // Gera este pasa el color del mensaje
          />
          <button
            className="h-10 w-40 mb-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={() => setOpenHelp(!openHelp)}
          >
            Ayuda
          </button>
        </div>
        <div className="flex gap-4 items-end">
          <button
            className="h-10 w-40 mb-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/3" />}
          >
            <Link to="/actividad/3">Siguiente Actividad</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
