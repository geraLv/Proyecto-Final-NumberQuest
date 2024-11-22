import React, { useState } from "react";
import { InputResponse, ActivitieModel } from "../hooks/allHooks";
import img2 from "../public/img/funcion1p.png";
import { Navigate, Link } from "react-router-dom";
import ActivitiesStatus from "../hooks/ActivitiesStatus";

export const Actividad1p = (answer1, answer2, className, separar) => {
  const [openHelp, setOpenHelp] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-gray-500");

  const [validar, setValidar] = useState(false);

  const [valorTeclado, setValorTeclado] = useState("");
  const [valorTeclado2, setValorTeclado2] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const write = (value) => {
    if (value === "Delete") {
      setValorTeclado((prev) => prev.slice(0, -1));
    } else {
      setValorTeclado((prev) => prev + value);
    }
  };

  const write2 = (value) => {
    if (value === "Delete") {
      setValorTeclado2((prev) => prev.slice(0, -1));
    } else {
      setValorTeclado2((prev) => prev + value);
    }
  };

  const handleValidation = () => {
    let response1Value = document.getElementById("response1").value;
    let response2Value = document.getElementById("response2").value;

    if (response1Value === "(-∞,0]" && response2Value === "[1/4,∞)") {
      setResponseMessage("¡Respuesta correcta!");
      setMessageColor("text-green-500");
      setValidar(true);
    } else {
      setValidar(false);
      setResponseMessage("Respuesta incorrecta");
      setMessageColor("text-red-500");
    }
  };
  validar === true ? ActivitiesStatus(validar) : ActivitiesStatus(false);

  return (
    <div className="justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full">
        <ActivitieModel
          title={"Dominio de funciones "}
          activitieNumber="Actividad 2)"
          guide="Reacuerda que debes poner los parentesis '()' o corechetes '[]' según corresponda"
          description="Determine el dominio de la siguiente función:"
        />
        <div className="bg-gray-200 rounded m-2 p-2 border-blue-gray-300 border-2 w-screen container text-black text-xl">
          <h1 className="text-black text-2xl">
            Como ejemplo usaremos la siguiente función:
          </h1>
          <br />
          √(4 - x^2)
          <br />
          <br />
          <h1 className="text-black text-2xl">
            Paso 1: Encontrar las restricciones para cada raíz cuadrada
          </h1>{" "}
          <br />
          1_Para la raíz √(4 - x^2) ​ , la expresión dentro de la raíz es 4 -
          x^2 debe ser mayor o igual a 0:
          <br />
          <br />
          <div className="flex">
            <h1 className="text-black text-2xl">4 - x^2 ≥ 0 </h1>
            <h1 className="text-light-blue-900 text-2xl">{"=>"}</h1>{" "}
            <h1 className="text-black text-2xl">4 ≥ x^2</h1>
          </div>
          <br /> Resolvemos el 4 ≥ x^2
          <br />
          <br />
          <div className="flex">
            <h1 className="text-black text-2xl">|x| ≤ 2</h1>
            <h1 className="text-light-blue-900 text-2xl">{}</h1>{" "}
            <h1 className="text-black text-2xl"></h1>
          </div>
          <br />
          Esto implica que:
          <br />
          <br />
          -2 ≤ x ≤ 2
          <br />
          <h1 className="text-black text-2xl">Conclusión</h1>
          <br />
          El dominio de esta funcion seria: x ∈ [-2,2]
          <br />
        </div>
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
          <div className={`flex flex-col ${className}`}>
            <div className={` ${messageColor} my-2 text-lg font-semibold`}>
              {responseMessage}
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="text"
                id="response1"
                value={valorTeclado}
                onFocus={(e) => e.target.select(setInputFocus(false))}
                onChange={(e) => setValorTeclado(e.target.value)}
                placeholder="-xx ; xx"
                maxLength={10}
                className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="text-xl">U</span>
              <input
                type="text"
                value={valorTeclado2}
                id="response2"
                onFocus={(e) => e.target.select(setInputFocus(true))}
                onChange={(e) => setValorTeclado2(e.target.value)}
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
        <div className="my-4 flex bg-blue-gray-100 rounded-xl flex-row w-full">
          <div className=" grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
            {[
              "x",
              "y",
              "∞",
              "π",
              "^2",
              "^n",
              "√",
              "e",
              "<",
              ">",
              "(",
              ")",
              "[",
              "]",
              ",",
              "=",
            ].map((item) => (
              <button
                key={item}
                onClick={inputFocus ? () => write2(item) : () => write(item)}
                className={`flex m-1 p-1 shadow-lg justify-center text-xl rounded items-center  hover:scale-105 duration-100 ease-in ${
                  { item } == "Delete" ? "bg-red-500" : "bg-white"
                }`}
                // `bg-${item === "Delete " ? ("bg-red-500 ") : null} flex m-1 p-1 shadow-lg justify-center text-xl rounded items-center bg-white hover:scale-105 duration-100 ease-in`
              >
                {item}
              </button>
            ))}
          </div>
          <div className=" grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
            {[
              1,
              2,
              3,
              "+",
              4,
              5,
              6,
              "-",
              7,
              8,
              9,
              "*",
              "/",
              0,
              ".",
              "Delete",
            ].map((item) => (
              <button
                key={item}
                onClick={inputFocus ? () => write2(item) : () => write(item)}
                className={`flex m-1 p-1 shadow-lg justify-center text-xl rounded items-center  hover:scale-105 duration-100 ease-in ${
                  item == "Delete" ? "bg-red-500" : "bg-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
