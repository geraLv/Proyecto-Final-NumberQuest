import React, { useState } from "react";
import { InputResponse, Surrender, ActivitieModel } from "../hooks/allHooks";
import img6 from "../public/img/funcion2.png";
import { Navigate, Link } from "react-router-dom";
import ActivitiesStatus from "../hooks/ActivitiesStatus";
export const Actividad5p = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-gray-500");
  const [validar, setValidar] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [valorTeclado, setValorTeclado] = useState("");
  const [valorTeclado2, setValorTeclado2] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const write = (value) => {
    setValorTeclado((prev) => prev + value);
  };

  const write2 = (value) => {
    setValorTeclado2((prev) => prev + value);
  };
  const handleValidation = () => {
    let response1Value = document.getElementById("response1").value;
    let response2Value = document.getElementById("response2").value;

    if (response1Value === "(-∞,5)" && response2Value === "(1,∞)") {
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
    <div className="container justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full">
        <ActivitieModel
          title="Dominio de Funciones"
          activitieNumber="Actividad 6)"
          guide="Recuerde que para escribir la respuesta no es necesario escribir paréntesis () o corchetes []"
          description="Teniendo en cuenta esta función, hallar el dominio de la función"
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
          1_Para la raíz √(5+𝑦) ​ , la expresión dentro de la raíz es 5+𝑦 debe
          ser mayor o igual a 0:
          <br />
          <br />
          <div className="flex">
            <h1 className="text-black text-2xl">5 + 𝑦 ≥ 0 </h1>
            <h1 className="text-light-blue-900 text-2xl">{"=>"}</h1>{" "}
            <h1 className="text-black text-2xl">𝑦 ≥ − 5</h1>
          </div>
          <br /> Para la raíz √(7 − 𝑦) ​ , la expresión dentro de la raíz es √(7
          − 𝑦) debe ser mayor o igual a 0:
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
          <h1 className="text-black text-2xl">𝑦 ≥ − 5</h1>
          <br />
          <h1 className="text-black text-2xl">𝑦 ≤ 7</h1>
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
          <img src={img6} className="" alt="" />
        </div>
        {openHelp ? (
          <div>
            <div className="container border-2 border-blue-gray-400 rounded p-3 my-3 bg-gray-200">
              <h1 className="text-2xl text-blue-800">Resolucion:</h1>
              <br />
              <h1 className="text-black text-xl">
                Condiciones para la raiz cuadrada
              </h1>
              <br />
              <h1 className="text-blue-800 text-2xl">x^2 + 4x - 5 ≥ 0 </h1>
              <br />
              <h1 className="text-black text-xl">Resolvemos la desigualdad</h1>
              <br />
              <div className="flex">
                {/* <h1 className="text-light-blue-900 text-2xl">=></h1>{" "} /}
                <h1 className="text-blue-800 text-2xl"> Al resolver la reslvente quedara x = 1 y x = -5</h1>
              </div>
              <br />
              {/ <br /> */}
                <h1 className="flex">
                  Estos resultados haran que el denominador sea 0, por ende el
                  dominio seria :
                </h1>
                <div className="flex gap-2 my-2">
                  <h1 className="text-blue-800 text-2xl"> ( − ∞ , -5 )</h1>
                  <h1 className="text-black text-2xl">U</h1>{" "}
                  <h1 className="text-blue-800 text-2xl">( 1 , +∞ )</h1>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={`flex flex-col `}>
          <div className={` ${messageColor} my-2 text-lg font-semibold`}>
            {responseMessage}
          </div>
          <div className="flex space-x-2 items-center">
            <input
              type="text"
              id="response1"
              value={valorTeclado}
              onChange={(e) => setValorTeclado(e.target.value)}
              onFocus={() => setInputFocus(false)}
              placeholder="-xx ; xx"
              maxLength={10}
              className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="text-xl">U</span>
            <input
              type="text"
              id="response2"
              value={valorTeclado2}
              onChange={(e) => setValorTeclado2(e.target.value)}
              onFocus={() => setInputFocus(true)}
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
  );
};
