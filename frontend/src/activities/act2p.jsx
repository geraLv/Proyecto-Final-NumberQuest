import React,{useState} from "react";
import { ActivitieModel, InputResponse } from "../hooks/allHooks";
import img3 from "../public/img/funcion3.png";
import imgguia3 from "../public/img/guiaact3.png"
import { Navigate, Link } from "react-router-dom";
// import Teclado from "../hooks/teclado";

export function Actividad2p() {
  const [openHelp, setOpenHelp] = useState(false);
  return (
    <div className="justify-start w-full h-full">
      <div className="container flex flex-col w-full h-full">
        <ActivitieModel
          title="Dominio de funciones"
          activitieNumber="Actividad 3)"
          guide='"INFINITO" debe escribirse como "inf", en caso de ser negativo agreger un "-" al inicio'
          description="Observa atentamente y halla el dominio de la funcón"
        />
        <div className="bg-gray-200 rounded m-2 p-2 border-blue-gray-300 border-2 w-screen container text-black text-xl">
        <h1 className="text-black text-2xl">
          Como ejemplo usaremos la siguiente función:
        </h1>
        <br />
        <img src={imgguia3} className=" " alt="" />
        <br />
        <br />
        <h1 className="text-black text-2xl">
          Paso 1: Encontrar las restricciones para cada raíz cuadrada
        </h1>{" "}
        <br />
        1_Para la raíz √(x^2 - 1) ​ , la expresión dentro de la raíz es 5+𝑦 debe ser
        mayor o igual a 0:
        <br />
        <br />
        <div className="flex">
          <h1 className="text-black text-2xl">x^2 - 1 ≥ 0 </h1>
          <h1 className="text-light-blue-900 text-2xl">{"=>"}</h1>{" "}
          <h1 className="text-black text-2xl">x^2 ≥ 1</h1>
        </div>
        <br /> Las 2 soluciones posibles son estas:
        <br />
        <br />
        x ≥ 1   o   x ≤ -1
        <br />
        <h1 className="text-black text-2xl">Paso 2: Considerar el denominador</h1>
        <br />
        Queremos evitar que el denominador sea 0. Por ende debemos excluir los valores de x que hagan que x^2 - 1 = 0, es decir, x = 1 y x = -1
        <br />
        <br />
        <h1 className="text-black text-2xl">Conclusión</h1>
        <h1 className="text-black text-2xl">x∈(−∞,−1)∪(1,∞)</h1>
      </div>
        <div className="py-5">
          <img src={img3} className=" " alt="" />
        </div>
        {openHelp ? (// cuando se aprieta el botod de ayuda se activa esta ternaria y eso nomas
          <div>
            <div className="container border-2 border-blue-gray-400 rounded p-3 my-3 bg-gray-200">
              <h1 className="text-2xl text-blue-800">Resolucion:</h1>
              <br />
              <h1 className="text-black text-xl">
                El unico requisito es que el denomiador no puede ser 0, por ende la funcion dentro de la raiz del denominador no tiene que ser 0
              </h1>
              <br />
              <h1 className="text-black text-xl">Paso 1: Encontrar la solucion de x^2 + 4x - 5 = 0:</h1>
              <br />
              <div className="flex">
                {/* <h1 className="text-light-blue-900 text-2xl">=></h1>{" "} */}
                <h1 className="text-blue-800 text-2xl"> Quedando dos resultados x = 1 y x = -5 </h1>
              </div>
              <br />
              {/* <br /> */}
              <h1 className="flex">
                Por lo tanto, el dominio de la función es:
              </h1>
              <div className="flex gap-2 my-2">
                <h1 className="text-blue-800 text-2xl"> Todos los Reales excepto el 1 y el -5 </h1>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col">
          <InputResponse
            answer1={13}
            answer2={1}
            separar={"---"}
            typeAnswer={false}
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
