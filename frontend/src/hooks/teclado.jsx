import React, { useState, useEffect } from "react";
import { InputResponse } from "./allHooks";
const Teclado = () => {
  const [valorTeclado, setValorTeclado] = useState("");
  const [valorTeclado2, setValorTeclado2] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const write = (value) => {
    setValorTeclado((prev) => prev + value);
  };

  const write2 = (value) => {
    setValorTeclado2((prev) => prev + value);
  };

  useEffect(() => {
    InputResponse(valorTeclado, valorTeclado2);
  }, []);

  return (
    <div className="bg-gray-50 flex flex-col h-1/2 justify-start w-full">
      <div>
        <input
          type="text"
          value={valorTeclado}
          onFocus={(e) => e.target.select(setInputFocus(false))}
          onChange={(e) => setValorTeclado(e.target.value)}
          className="text-black rounded border-2 border-black p-2 w-20 bg-blue-gray-100"
        />
        <input
          type="text"
          onFocus={(e) => e.target.select(setInputFocus(true))}
          value={valorTeclado2}
          onChange={(e) => setValorTeclado2(e.target.value)}
          className="w-20 rounded border-2 p-2 border-black bg-yellow-500"
        />
      </div>
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
