import { useState } from "react";
import { Formulario } from "./hook/useChoice";

export function Actividad3() {
    return(
        <>
        <Formulario/>
        </>
        
    )
    
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
}
