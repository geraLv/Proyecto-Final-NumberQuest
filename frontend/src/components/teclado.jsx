import React from "react";

const Teclado = () => {
  return (
    <div className="bg-gray-50 flex h-1/2 justify-start w-full">
      Teclado
      <div className="grid grid-cols-5 grid-rows-5 w-1/2 h-full m-10 gap-1">
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          =
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          =
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          =
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          =
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          =
        </button>
      </div>
      <div className="grid grid-cols-5 grid-rows-4 w-1/2 h-full m-10 gap-1">
        <button className="flex shadow-lg h-20 rounded-tl-lg justify-center text-3xl items-center bg-white hover:scale-105 hover:shadow-2xl duration-100  ease-in">
          7
        </button>
        <button className="flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          8
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          9
        </button>
        <button className=" flex shadow-lg rounded-tr-lg justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          x
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          ÷
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          4
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          5
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          6
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          +
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          -
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          1
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          2
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          3
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          =
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.535 3h14.464a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.833-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3m6.464 7.586l-2.828-2.829l-1.414 1.415L11.585 12l-2.828 2.828l1.414 1.415l2.828-2.829l2.829 2.829l1.414-1.415L14.414 12l2.828-2.828l-1.414-1.415z"
            />
          </svg>
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          0
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          .
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
            />
          </svg>
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
            />
          </svg>
        </button>
        <button className=" flex shadow-lg  justify-center text-3xl items-center bg-white hover:scale-105 duration-100 ease-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 14V5h-2v7H9.414V6.586L3 13l6.414 6.414V14z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Teclado;
