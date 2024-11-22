import React, { useState } from "react";
import { ActivitieModel, InputEdit, CheckResponse } from "../hooks/allHooks";
import img7 from "../public/img/funcion6.png";
import { Navigate, Link } from "react-router-dom";
export const Actividad6p = () => {
  const [openHelp, setOpenHelp] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const handleCheckboxChange = (value) => {
    setSelectedValue(value === selectedValue ? null : value);
  };
  return (
    <div className="constainer">
      <div className="flex flex-col w-full h-full">
        <ActivitieModel
          title="Multiplicación de decimales"
          activitieNumber="Actividad 7)"
          guide="Elija una de las opciones"
          description="Resuelve la siguiente multiplicación de decimales: 2.5 × 1.4"
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
        </div>
        <div className="py-5">
          <img src={img7} className=" " alt="" />
        </div>
        {openHelp ? (
          <div>
            <div className="container border-2 border-blue-gray-400 rounded p-3 my-3 bg-gray-200">
              <h1 className="text-2xl text-blue-800">Resolucion:</h1>
              <br />
              <h1 className="text-black text-xl">
                Establecer la condicion para la raiz cuadrada
              </h1>
              <br />
              <h1 className="text-blue-800 text-2xl">2x^2 + 5x -7 ≥ 0</h1>
              <br />
              <h1 className="text-black text-xl">Resolvemos la desigualdad</h1>
              <br />
              <div className="flex">
                {/* <h1 className="text-light-blue-900 text-2xl">=></h1>{" "} /}
                <h1 className="text-blue-800 text-2xl"> Quedando como resultados x = 1 y x = -7/2</h1>
              </div>
              <br />
              {/ <br /> */}
                <h1 className="flex">
                  Por lo tanto, el dominio de la función es:
                </h1>
                <div className="flex gap-2 my-2">
                  <h1 className="text-blue-800 text-2xl"> ( − ∞ , -7/2 ]</h1>
                  <h1 className="text-black text-2xl">U</h1>{" "}
                  <h1 className="text-blue-800 text-2xl">[ 1 , ∞ )</h1>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
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

          <CheckResponse selectedValue={selectedValue} />
        </ul>
        <div className="mb-3 flex gap-4 justifiy-center">
          <button
            className="h-10 w-auto mb-2 p-1  bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={<Navigate to="/temas/2" />}
          >
            <Link to="/temas/2">Volver a las actividades</Link>
          </button>
          <button
            className="h-10 w-40 mb-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            onClick={() => setOpenHelp(!openHelp)}
          >
            Ayuda
          </button>
        </div>
      </div>
    </div>
  );
};
