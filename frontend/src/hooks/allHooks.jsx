import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ActivitiesStatus from "./ActivitiesStatus";

export function InputEdit({ value, onChange, selectedValue }) {
  function handleCheckboxChange() {
    onChange(value);
  }

  return (
    <input
      type="checkbox"
      value={value}
      checked={selectedValue === value}
      onChange={handleCheckboxChange}
    />
  );
}

export function CheckResponse({ selectedValue }) {
  let imgRes = [
    <img
      style={{ width: 560, height: 292 }}
      src="https://th.bing.com/th/id/OIP.k6H2Q8P1DKlgmf4tMLFwvgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3"
      alt=""
    />,
    <img
      src="https://media.licdn.com/dms/image/C5112AQEYARonHijMaQ/article-cover_image-shrink_600_2000/0/1549770046623?e=2147483647&v=beta&t=9B-KDNvL_mfs2VrOXKrsHf8T5NMG2MXAKCi5i89cXeE"
      alt=""
    />,
  ];

  function sendResponse() {
    if (selectedValue === "Correcto") {
      return (
        <div>
          <p className="text-green-600">Correcto</p>
          {imgRes[0]}
        </div>
      );
    } else {
      alert("Hola capo");
    }
  }

  return <button onClick={sendResponse}>Responder</button>;
}

export function ActivitieModel({
  title,
  activitieNumber,
  description,
  guide,
  nImage,
}) {
  const imgAct = [
    <img src="../public/img/funcion1.png" alt="Imagen 1" />,
    <img src="../public/img/funcion2.png" alt="Imagen 2" />,
    <img src="../public/img/funcion3.png" alt="Imagen 3" />,
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-700">{title}</h1>
      <p className="text-blue-gray-500 mx-6 mb-2 italic">{guide}</p>
      <h2 className="text-xl font-semibold">{activitieNumber}</h2>
      {imgAct[nImage]}
      <h3 className="text-lg">{description}</h3>
    </>
  );
}

const Teclado = ({ InputF, ValorT, ValorT2 }) => {
  const [valorTeclado, setValorTeclado] = useState(ValorT || "");
  const [valorTeclado2, setValorTeclado2] = useState(ValorT2 || "");
  const [inputFocus, setInputFocus] = useState(false || InputF);

  const write = (value) => {
    setValorTeclado((prev) => prev + value);
  };

  const write2 = (value) => {
    setValorTeclado2((prev) => prev + value);
  };

  useEffect(() => {
    InputResponse(valorTeclado, valorTeclado2);
  }, [valorTeclado, valorTeclado2]);

  return (
    <div className="bg-gray-50 flex flex-col h-1/2 justify-start w-full">
      <div className="justify-self-end">
        Teclado
        <div className="grid grid-cols-4 grid-rows-4 h-full m-10 gap-1">
          {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "/", 0, ".", "="].map(
            (item) => (
              <button
                key={item}
                onClick={inputFocus ? () => write2(item) : () => write(item)}
                className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Teclado;

export const InputResponse = ({
  answer1,
  answer2,
  valorTeclado,
  valorTeclado2,
}) => {
  const answers = [answer1, answer2];
  let ImputF = false;

  const validationResponse = (valorTeclado, valorTeclado2) => {
    const response1Value = document.getElementById("response1").value;
    const response2Value = document.getElementById("response2").value;

    let falseValue = false;

    if (response1Value === answers[0] && response2Value === answers[1]) {
      alert("Respuesta correcta");
    } else {
      alert("Respuesta incorrecta");
    }
  };

  return (
    <div className={` space-y-4`}>
      {/* Input de respuesta 1 */}
      <div className="flex space-x-2 justify-stard items-center">
        <input
          type="text"
          value={valorTeclado}
          placeholder="xx/-xx"
          maxLength={20}
          onChange={(e) => Teclado((ValorT = e.target.value))}
          onFocus={(e) => e.target.select(Teclado((ImputF = true)))}
          className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span className="text-xl">---</span>
        <input
          type="text"
          value={valorTeclado2}
          id="response2"
          onFocus={(e) => e.target.select(Teclado(true))}
          placeholder="xx/-xx"
          onChange={(e) => Teclado(e.target.value)}
          maxLength={20}
          className="px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex justify-stard mt-4">
        <button
          onClick={() => validationResponse(valorTeclado, valorTeclado2)}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Responder
        </button>
      </div>
    </div>
  );
};
export function InputCoso() {
  return <></>;
}

export function Surrender({ className }) {
  function ayuda() {
    let supelhelper = 0;
    let helper = 0;
    supelhelper = helper + 1;
    console.log(supelhelper);
  }

  return (
    <div
      className={`${className} flex-col items-start mt-6 max-w-sm space-x-2`}
    >
      <button
        onClick={ayuda}
        className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 transition duration-200"
      >
        Ayuda
      </button>
    </div>
  );
}
