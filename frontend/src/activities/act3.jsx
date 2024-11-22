import react,{ useState } from "react";
import { ActivitieModel, CheckResponse, InputEdit } from "../hooks/allHooks";
import img4 from "../public/img/funcion4.png";
import { Navigate, Link } from "react-router-dom";
import imgguia4 from "../public/img/guiaact4.png"

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
        <img src={imgguia4} alt="" />
        <br />
        <br />
        <h1 className="text-black text-2xl">
            En este caso al ser una funcion cubica el dominio serian todos Los reales
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
          El dominio de la funcion son todos los Reales, en este caso desde -infinito hasta +infinito.
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
            responseExpose={" x ∈ (-infinito ; +infinito)"}
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
            responseExpose={"(-inf;1)"}
          />
        </li>
        <li>
          <InputEdit
            value="Incorrecto2"
            selectedValue={selectedValue}
            onChange={handleCheckboxChange}
            responseExpose={"x∈(1;inf)"}
          />
        </li>
        <div className="flex gap-4 flex-row">
          <CheckResponse selectedValue={selectedValue} />
          <div className="flex mt-4 h-auto justify-center">
            <button
              className=" w-40 mb-2 h-full  bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
              onClick={<Navigate to="/actividad/5" />}
            >
              <Link to="/actividad/5">Siguiente Actividad</Link>
            </button>
            <button
            className=" h-10 w-40 mb-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
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

// const [response, setResponse] = useState("");

// const [response, setResponse] = useState("");

// const Images = [
//     { id: 1, url: "https://picsum.photos/200/300"
//         },
//         { id: 2, url: "https://picsum.photos/200/301"
//             },
//             { id: 3, url: "https://picsum.photos/200/302"
//                 }
// ]

// function handleCheckboxChange(event) {
//     const { value, checked } = event.target;
//     if (checked) {
//         setResponse(value);
//     } else {
//         setResponse("");
//     }
// }

// function sendResponse() {
//     if (response === "Todos los reales") {
//         alert("La respuesta es correcta");
//         return(
//             <h1></h1>
//         )
//     } else {
//         alert("La respuesta es incorrecta. Intenta de nuevo.");
//     }
// }

// return (
//     <div>
//         <h1>Actividad 2: Observar, resolver y responder</h1>
//         <h3>3)</h3>
//         <img src="../../public/img/funcion3.png" alt="" />
//         <p>¿Cuál es el dominio de la función?</p>
//         <ul>
//             <li>
//                 <input
//                     type="checkbox"
//                     value="Todos los reales"
//                     onChange={handleCheckboxChange}
//                 /> Todos los reales
//             </li>
//             <li>
//                 <input
//                     type="checkbox"
//                     value="Infinito Positivo"
//                     onChange={handleCheckboxChange}
//                 /> Infinito Positivo
//             </li>
//             <li>
//                 <input
//                     type="checkbox"
//                     value="Ninguna de las anteriores"
//                     onChange={handleCheckboxChange}
//                 /> Ninguna de las anteriores
//             </li>
//             <li>
//                 <input
//                     type="checkbox"
//                     value="Infinito Negativo"
//                     onChange={handleCheckboxChange}
//                 /> Infinito Negativo
//             </li>
//         </ul>
//         <button onClick={sendResponse}>Responder</button>
//     </div>
// );
// }
