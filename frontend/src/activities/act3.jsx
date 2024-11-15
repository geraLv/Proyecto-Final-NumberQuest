import { useState } from "react";
import { Button, InputEdit } from "../hooks/allHooks";


export function Actividad3() {
  const [selectedValue, setSelectedValue] = useState(null);  // Este estado guarda el valor del checkbox seleccionado

  // Actualiza el valor seleccionado o lo desmarca si ya está marcado
  const handleCheckboxChange = (value) => {
    setSelectedValue(value === selectedValue ? null : value);  // Si ya está seleccionado, lo desmarca
  };

  return (
    <div>
      <h1>Actividad 2 :D</h1>
      <ul>
        <li>
          <InputEdit value="Correcto" selectedValue={selectedValue} onChange={handleCheckboxChange} />
          Todos los reales :v
        </li>
        <li>
          <InputEdit value="Incorrecto0" selectedValue={selectedValue} onChange={handleCheckboxChange} />
          Relleno
        </li>
        <li>
          <InputEdit value="Incorrecto1" selectedValue={selectedValue} onChange={handleCheckboxChange} />
          Relleno
        </li>
        <li>
          <InputEdit value="Incorrecto2" selectedValue={selectedValue} onChange={handleCheckboxChange} />
          Relleno
        </li>
      </ul>
      <Button selectedValue={selectedValue} />
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
