import React, { useState } from "react";
import { ActivitieModel, InputResponse } from "../hooks/allHooks";
import { Navigate, Link } from "react-router-dom";
import img5 from "../public/img/funcion5.png";
export function Actividad4p() {
  const [openHelp, setOpenHelp] = useState(false);
  return (
    <div className="justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full">
        <ActivitieModel
          title="Dominio de funciones"
          activitieNumber="Actividad 5)"
          guide="puedes escribir números negativos"
          description="Observa atentamente y halla el dominio de la funcón"
        />
        <div className="bg-gray-200 rounded m-2 p-2 border-blue-gray-300 border-2 w-screen container text-black text-xl">
        <h1 className="text-black text-2xl">
          Como ejemplo usaremos la siguiente función:
        </h1>
        <br />
        √(5+y) ​ + √(7−y) ​ +3⋅ √(3) ​
        <br />
        <br />
        <h1 className="text-black text-2xl">
          Paso 1: Encontrar las restricciones para cada raíz cuadrada
        </h1>{" "}
        <br />
        1_Para la raíz √(5+𝑦) ​ , la expresión dentro de la raíz es 5+𝑦 debe ser
        mayor o igual a 0:
        <br />
        <br />
        <div className="flex">
          <h1 className="text-black text-2xl">5 + 𝑦 ≥ 0 </h1>
          <h1 className="text-light-blue-900 text-2xl">{"=>"}</h1>{" "}
          <h1 className="text-black text-2xl">𝑦 ≥ − 5</h1>
        </div>
        <br /> Para la raíz √(7 − 𝑦) ​ , la expresión dentro de la raíz es √(7 −
        𝑦) debe ser mayor o igual a 0:
        <br />
        <br />
        <div className="flex">
          <h1 className="text-black text-2xl">7 − 𝑦 ≥ 0</h1>
          <h1 className="text-light-blue-900 text-2xl">{"=>"}</h1>{" "}
          <h1 className="text-black text-2xl">𝑦 ≤ 7</h1>
        </div>
        <br />
        La expresión 3 ⋅ √3​ es constante y no afecta el dominio.
        <br />
        <br />
        <h1 className="text-black text-2xl">Paso 2: Determinar el dominio</h1>
        <br />
        Ahora, juntamos ambas restricciones:
        <br />
        <br />
        <h1 className="text-black text-2xl">*𝑦 ≥ − 5</h1>
        <br />
        <h1 className="text-black text-2xl">*𝑦 ≤ 7</h1>
        <br />
        El dominio de la función será la intersección de ambos conjuntos, es
        decir: 𝑦 ∈ [ − 5 , 7 ]
        <br />
        Respuesta final: <br />
        <br />
        El dominio de la función es: 𝑦 ∈ [ − 5 , 7 ] y ∈ [−5,7] <br />
        Es decir, los valores de 𝑦 y deben estar entre − 5 y 7.
      </div>
        <div className="py-5">
          <img src={img5} className=" " alt="" />
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
        <InputResponse
          Separar="U"
          answer1={"(-inf,-4)"}
          answer2={"(4,inf)"}
          tyeAnswer={true}
        />
        
        <div className="flex gap-4 items-end">
          <button
            className="h-10 w-40 mb-2   bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/actividad/6" />}
          >
            <Link to="/actividad/6">Siguiente Actividad</Link>
          </button>
          <button
            className=" h-10 w-40 mb-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={() => setOpenHelp(!openHelp)}
          >
            Ayuda
          </button>
          
        </div>
      </div>
      <div className="container  my-4 flex bg-blue-gray-100 rounded-xl flex-row w-full">
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
  );
}
