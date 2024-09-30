import React from "react";
import { MenuDefault } from "./button";

const NavBar = () => {
  return (
    <div className="flex-row bg-slate-100">
      <section className="px-14 py-5">
        <header class="bg-dark shadow-black shadow-md self-center rounded-xl text-gray-400 bg-slate-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
              <a class="mr-5 hover:text-white">
                <h1>Inicio</h1>
              </a>
              <MenuDefault>Unidades</MenuDefault>
              <a class="mr-5 hover:text-white"></a>
            </nav>
            <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl xl:block lg:hidden">Number Quest</span>
            </a>
            <div class="lg:w-2/5 space-x-4 inline-flex lg:justify-end ml-5 lg:ml-0">
              <a class="mr-5 hover:text-white self-center">Iniciar sesión</a>
              <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded-s-3xl text-base h-14 md:mt-0">
                Registrarse
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
};

export default NavBar;
