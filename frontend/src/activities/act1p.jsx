import React, { useState, useEffect } from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";
import img2 from "../public/img/funcion2.png";
import { Navigate, Link } from "react-router-dom";
export const Actividad1p = () => {
  const [openHelp, setOpenHelp] = useState(false);

  return (
    <div className="justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full">
        <ActivitieModel
          title={"Dominio de funciones "}
          activitieNumber="Actividad 1)"
          guide="puedes escribir números negativos"
          description="Siguiendo el ejemplo de la anterior actividad, observa atentamente y halla el dominio de la funcón:"
        />
        <div className="py-5">
          <img src={img2} className="h-8 " alt="" />
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
        </div>
        </>
    )

}