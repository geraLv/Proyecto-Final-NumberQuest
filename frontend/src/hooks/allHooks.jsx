import React, { useState } from "react";




export function InputEdit({ value, onChange, selectedValue, className, responseExpose }) {
  function handleCheckboxChange() {
    onChange(value);
  }

  return (
    <div className={`${className} flex items-center`}>
      <input
        type="checkbox"
        value={value}
        checked={selectedValue === value}
        onChange={handleCheckboxChange}
        className="mr-2 p-2 rounded-md border-2 border-blue-300 focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-lg">{responseExpose}</span>
    </div>
  );
}







export function CheckResponse({ selectedValue }) {

  function sendResponse() {
    if (selectedValue === "Correcto") {
      alert('La respuesta es correcta');
    } else {
      alert("Mala respuesta, intenta otra vez");
    }
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={sendResponse}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Responder
      </button>
    </div>
  );
}









export function ActivitieModel({ title, activitieNumber, description, guide, nImage }) {
  const imgAct = [
      <img src="../public/img/funcion1.png" alt="Imagen 1" />,
      <img src="../public/img/funcion2.png" alt="Imagen 2" />,
      <img src="../public/img/funcion3.png" alt="Imagen 3" />,
      <img src="../public/img/funcion4.png" alt="Imagen 4" />,
      <img src="../public/img/funcion5.png" alt="Imagen 5" />,
      <img src="../public/img/funcion6.png" alt="Imagen 6" />,
  ];

  return (
      <>
          <h1 className="text-3xl font-bold text-blue-700">{title}</h1>
          <p className="text-blue-gray-500 mx-6 mb-2 italic">{guide}</p>
          <h2 className="text-xl font-semibold">{activitieNumber}</h2>
          <h3 className="text-lg">{description}</h3>
          {imgAct[nImage]}
      </>
  );
}





export function InputResponse({ answer1, answer2, className, separar, typeAnswer }) {
  const [valueActivitie, setValueActivitie] = useState(false);

  const answers = [answer1, answer2];

  function validationResponse() {
      const response1Value = document.getElementById("response1").value.trim();  // Eliminar espacios
      const response2Value = document.getElementById("response2").value.trim();  // Eliminar espacios

      if (typeAnswer === true) { // Comparación si las respuestas son cadenas de texto
        if (response1Value === answers[0] && response2Value === answers[1]) {
          setValueActivitie(true);
          alert("Respuesta correcta");
        } else {
          alert("Respuesta incorrecta");
        }
      } else { // Comparación si las respuestas son números
        if (parseInt(response1Value) === answers[0] && parseInt(response2Value) === answers[1]) {
          setValueActivitie(true);
          alert("Respuesta correcta");
        } else {
          alert("Respuesta incorrecta");
        }
      }
  }

  return (
      <div className={`${className} space-y-4`}>
          <div className="flex space-x-2 justify-center items-center">
              <input
                  type="text"
                  id="response1"
                  placeholder="xx/-xx"
                  maxLength={10}
                  className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="text-xl">{separar}</span>
              <input
                  type="text"
                  id="response2"
                  placeholder="xx/-xx"
                  maxLength={10}
                  className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
          </div>

          <div className="flex justify-center mt-4">
              <button
                  onClick={validationResponse}
                  className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
              >
                  Responder
              </button>
          </div>
      </div>
  );
}







export function Surrender() {
  

  

  return (
      <div className=" flex justify-between mt-6 max-w-sm mx-auto">
          <button
              className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 transition duration-200"
          >
              Ayuda
          </button>
          <button
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
          >
              Siguiente Actividad
          </button>
      </div>
  );
}






