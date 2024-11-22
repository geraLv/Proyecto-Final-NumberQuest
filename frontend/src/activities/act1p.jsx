import React, { useState, useEffect } from "react";
import { InputResponse, ActivitieModel } from "../hooks/allHooks";
import img2 from "../public/img/funcion1p.png";
import { Navigate, Link } from "react-router-dom";
// import Teclado from "../hooks/allHooks";

export const Actividad1p = () => {
  const [openHelp, setOpenHelp] = useState(false);
  // const [tecladoOk, setTecladoOk] = useState(false);
  // const [tecladoOk2, setTecladoOk2] = useState(false);

  return (
    
    <div className="justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full">
        
        <ActivitieModel
          title={"Dominio de funciones "}
          activitieNumber="Actividad 2)"
          guide="Reacuerda que debes poner los parentesis '()' o corechetes '[]' según corresponda"
          description="Siguiendo el ejemplo de la anterior actividad, observa atentamente y halla el dominio de la funcón:"
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
        1_Para la raíz √(4 - x^2) ​ , la expresión dentro de la raíz es 4 - x^2 debe ser
        mayor o igual a 0:
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
                {/* <h1 className="text-light-blue-900 text-2xl">=></h1>{" "} */}
                <h1 className="text-blue-800 text-2xl"> x ( 4 x − 1 ) ≥ 0 </h1>
              </div>
              <br />
              {/* <br /> */}
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
            className={"py-2 itmes-start"}
            answer1={"(-inf,0]"}
            answer2={"[1/4,inf)"}
          />
          <button
            className=" h-10 w-40 mb-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={() => setOpenHelp(!openHelp)}
          >
            Ayuda
          </button>
        </div>
        <div className="flex gap-4 items-end">
          <button
            className="h-10 w-40 mb-2   bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/3" />}
          >
            <Link to="/actividad/3">Siguiente Actividad</Link>
          </button>

          {/* </div>
        <div className="my-4 flex bg-blue-gray-100 rounded-xl flex-row w-full">
          <div className=" grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
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
                onClick={inputFocus ? () => write2(item) : () => write(item)}
                className="flex m-1 p-1 shadow-lg justify-center text-xl rounded items-center bg-white hover:scale-105 duration-100 ease-in"
              >
                {item}
              </button>
            ))}
          </div>
          <div className=" grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
            {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "/", 0, ".", "="].map(
              (item) => (
                <button
                  key={item}
                  onClick={inputFocus ? () => write2(item) : () => write(item)}
                  className="flex shadow-lg justify-center m-1 p-1 rounded text-xl items-center bg-white hover:scale-105 duration-100 ease-in"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div> */}
        </div>

        <div className="my-4 flex bg-blue-gray-100 rounded-xl flex-row w-full">
          <div className=" grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
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
                // onClick={inputFocus ? () => write2(item) : () => write(item)}
                className="flex m-1 p-1 shadow-lg justify-center text-xl rounded items-center bg-white hover:scale-105 duration-100 ease-in"
              >
                {item}
              </button>
            ))}
          </div>
          <div className=" grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
            {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "/", 0, ".", "="].map(
              (item) => (
                <button
                  key={item}
                  // onClick={inputFocus ? () => write2(item) : () => write(item)}
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
};
