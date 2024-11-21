import React, { useState } from "react";

const Teclado = () => {
  const [valorTeclado, setValorTeclado] = useState("");

  const write = (value) => {
    setValorTeclado((prev) => prev + value);
  };
  console.log(valorTeclado);
  return (
    <div className="bg-gray-50 flex h-1/2 justify-start w-full">
      Teclado
      <div className="grid grid-cols-4 grid-rows-4 h-full m-10 gap-1">
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "/", 0, ".", "="].map(
          (item) => (
            <button
              key={item}
              onClick={() => write(item)}
              className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in"
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Teclado;
