import { useState } from "react";
import { ActivitieModel, CheckResponse, InputEdit } from "../hooks/allHooks";
import img4 from "../public/img/funcion4.png";
import imgguia4 from "../public/img/imgguia4.png";
import { Navigate, Link } from "react-router-dom";
export function Actividad3() {
  const [selectedValue, setSelectedValue] = useState(null); // Este estado guarda el valor del checkbox seleccionado
  const [openHelp, setOpenHelp] = useState(false);
  // Actualiza el valor seleccionado o lo desmarca si ya está marcado
  const handleCheckboxChange = (value) => {
    setSelectedValue(value === selectedValue ? null : value); // Si ya está seleccionado, lo desmarca
  };

  return (
    <div>
      <ActivitieModel
        title="Dominio de funciones"
        activitieNumber="Actividad 4)"
        guide="Elije una de las opciones"
        description=""
      />
      <div className="bg-gray-200 rounded m-2 p-2 border-blue-gray-300 border-2 w-screen container text-black text-xl">
        <h1 className="text-black text-2xl">
          Como ejemplo usaremos la siguiente función:
        </h1>
        <br />
        <div className="rounded border-2 border-blue-gray-300 w-48 h-11">
          <img className="h-10" src={imgguia4} alt="" />
        </div>
        <br />
        <br />
        <h1 className="text-black text-2xl">
          En este caso al ser una funcion cubica el dominio serian todos Los
          reales
        </h1>{" "}
      </div>
      <div className="py-5">
        <img src={img4} className="h-8" alt="" />
      </div>
      {openHelp ? (
        <div className="container border-2 border-blue-gray-400 rounded p-3 my-3 bg-gray-200">
          <h1 className="text-2xl text-blue-800">Resolucion:</h1>
          <br />
          <h1 className="text-black text-xl">
            El dominio de la funcion son todos los Reales, en este caso desde
            -infinito hasta +infinito.
          </h1>
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
            responseExpose={"x∈(-inf,inf)"}
          />
        </li>
        <li>
          <InputEdit
            value="Incorrecto0"
            selectedValue={selectedValue}
            onChange={handleCheckboxChange}
            responseExpose={" x ∈ ( 0 ; +infinito)"}
          />
        </li>
        <li>
          <InputEdit
            value="Incorrecto1"
            selectedValue={selectedValue}
            onChange={handleCheckboxChange}
            responseExpose={"(-infinito ; 1)"}
          />
        </li>
        <li>
          <InputEdit
            value="Incorrecto2"
            selectedValue={selectedValue}
            onChange={handleCheckboxChange}
            responseExpose={" x ∈ (1 ; +infinito)"}
          />
        </li>
        <div className="flex gap-4 flex-row">
          <CheckResponse selectedValue={selectedValue} />
          <div className="flex mt-4 h-10 gap-4 justify-center">
            <button
              className=" w-40 mb-2 h-full  bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
              onClick={<Navigate to="/actividad/5" />}
            >
              <Link to="/actividad/5">Siguiente Actividad</Link>
            </button>
            <button
              className="h-10 w-40 mb-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
              onClick={() => setOpenHelp(!openHelp)}
            >
              Ayuda
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
}
