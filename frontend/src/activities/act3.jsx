import { useState } from "react";
import { ActivitieModel, CheckResponse, InputEdit } from "../hooks/allHooks";
import img4 from "../public/img/funcion4.png";

import { Navigate, Link } from "react-router-dom";
export function Actividad3() {
  const [selectedValue, setSelectedValue] = useState(null); // Este estado guarda el valor del checkbox seleccionado

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
    <div className="py-5">
          <img src={img4} className="h-8" alt="" />
        </div>
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

                        <CheckResponse selectedValue={selectedValue}/>
                </ul>
      <div className="flex gap-4 justify-center">
        <button
          className="h-10 w-40 mb-2   bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
          onClick={<Navigate to="/actividad/5" />}
        >
          <Link to="/actividad/5">Siguiente Actividad</Link>
        </button>
      </div>
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
