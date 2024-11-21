import React from "react";
import { ActivitieModel, InputResponse } from "../hooks/allHooks";
import img3 from "../public/img/funcion3.png";
import { Navigate, Link } from "react-router-dom";
// import Teclado from "../hooks/teclado";

export function Actividad2p() {
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
          <InputResponse
            answer1={13}
            answer2={1}
            separar={"---"}
            typeAnswer={false}
          />
          <button
            className=" h-10 w-40 mb-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={() => null}
          >
            Ayuda
          </button>
        </div>
        <div className="flex gap-4 items-end">
          <button
            className="h-10 px-1  bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/4" />}
          >
            <Link to="/actividad/4">Siguiente Actividad</Link>
          </button>
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
}
