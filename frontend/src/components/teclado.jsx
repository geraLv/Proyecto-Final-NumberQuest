import React from "react";

const Teclado = () => {
  return (
    <div className="bg-gray-50 flex h-1/2 justify-start w-full">
      Teclado
      <div className="grid grid-cols-4 grid-rows-4 h-full m-10 gap-1">
        <button className="flex shadow-lg h-20 rounded-tl-lg justify-center text-3xl items-center bg-white hover:scale-105 hover:shadow-2xl duration-100 ease-in">
          1
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          2
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          3
        </button>
        <button className="flex shadow-lg rounded-tr-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          +
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          4
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          5
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          6
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          -
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          7
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          8
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          9
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          ×
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          ÷
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          0
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          .
        </button>
        <button className="flex shadow-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          =
        </button>
      </div>
    </div>
  );
};

export default Teclado;
