import React, { useState } from "react";
import ActivitiesStatus from "./ActivitiesStatus";

export function InputEdit({
  value,
  onChange,
  selectedValue,
  className,
  responseExpose,
}) {
  function handleCheckboxChange() {
    onChange(value);
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
  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-gray-500"); // Gris por defecto
  const [validar, setValidar] = useState(false);
  function sendResponse() {
    if (selectedValue === "Correcto") {
      setResponseMessage("¡Respuesta correcta!");
      setMessageColor("text-green-500");
    } else {
      setResponseMessage("Mala respuesta, intenta otra vez");
      setMessageColor("text-red-500");
    }
  }

  const correccion = () => {
    selectedValue === "Correcto"
      ? (setValidar(true), sendResponse("¡Respuesta correcta!"))
      : setValidar(false);
  };
  validar === true ? ActivitiesStatus(validar) : ActivitiesStatus(false);

  return (
    <div className="flex justify-center mt-4">
      <div className={`mt-2 ${messageColor} text-lg font-semibold`}>
        {responseMessage}
      </div>

      <button
        onClick={(sendResponse, correccion)}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Responder
      </button>
    </div>
  );
}

export function ActivitieModel({
  title,
  activitieNumber,
  description,
  guide,
  nImage,
}) {
  const imgAct = [
    <img src=".public/img/funcion1p.png" alt="Imagen 1" />,
    <img src="../public/img/funcion2.png" alt="Imagen 2" />,
    <img src="../public/img/funcion3.png" alt="Imagen 3" />,
    <img src="../public/img/funcion4.png" alt="Imagen 4" />,
    <img src="../public/img/funcion5.png" alt="Imagen 5" />,
    <img src="../img/funcion6.png" alt="Imagen 6" />,
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

export function InputResponse({
  answer1,
  answer2,
  className,
  separar,
  typeAnswer,
}) {
  const [valueActivitie, setValueActivitie] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-gray-500");
  // const answers = [answer1, answer2];
  // const [validar, setValidar] = useState(false);
  // let response1Value = document.getElementById("response1").value;
  // let response2Value = document.getElementById("response2").value;
  function validationResponse() {
    let response1Value = document.getElementById("response1").value;
    let response2Value = document.getElementById("response2").value;

    if (typeAnswer === true) {
      // Verifica si las respuestas son correctas
      if (response1Value === answer1 && response2Value === answer2) {
        setValueActivitie(true);
        setResponseMessage("¡Respuesta correcta!");
        setMessageColor("text-green-500");
        // setValidar(true);}
      } else {
        setResponseMessage("Respuesta incorrecta");
        setMessageColor("text-red-500");
      }
    } else {
      // Si el tipo de respuesta es numérico
      response1Value = parseInt(response1Value);
      response2Value = parseInt(response2Value);

      if (response1Value === answer1 && response2Value === answer2) {
        setValueActivitie(true);
        // setValidar(true);
        setResponseMessage("¡Respuesta correcta!");
        setMessageColor("text-green-500");
      } else {
        setResponseMessage("Respuesta incorrecta");
        setMessageColor("text-red-500");
        // setValidar(false);
      }
    }
    // return validar;
  }
  // validar === true ? ActivitiesStatus(validar) : ActivitiesStatus(false);
  return (
    <div className={`flex flex-col  ${className} `}>
      <div className={` ${messageColor} my-2 text-lg font-semibold`}>
        {responseMessage}
      </div>
      <div className="flex space-x-2  items-center">
        <input
          type="text"
          id="response1"
          placeholder="-xx ; xx"
          maxLength={10}
          className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span className="text-xl">{separar}</span>
        <input
          type="text"
          id="response2"
          placeholder="-xx ; xx"
          maxLength={10}
          className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex justify-start mt-4">
        <button
          onClick={validationResponse} //como lo marco correcto
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Responder
        </button>
      </div>
    </div>
  );
}

export function Surrender(nextOption) {
  return (
    <div className=" flex justify-between mt-6 max-w-sm mx-auto">
      <button className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 transition duration-200">
        Ayuda
      </button>
      <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200">
        Siguiente
      </button>
    </div>
  );
}
