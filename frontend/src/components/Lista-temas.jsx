import React from "react";
// import Navbar from "./navbar";
// import { MenuDefault } from "./button";
import Layaut from "./layaut";
import Dropdown from "./lista";
import Footer from "./footer";
import { Button } from "@material-tailwind/react";
// import { MenuDefault } from "./button";

const ListaTemas = () => {
  return (
    <>
      <nav>
        <div>
          <header class="py-5 px-14 text-gray-100 body-font md:w-full">
            <div class="bg-dark rounded-lg h-28 mx-auto grid grid-cols-3 px-5 flex-col md:flex-row items-center">
              <>
                <nav className="gap-1 flex lg:w-full flex-wrap flex-row items-center text-base md:ml-auto">
                  <a href="/">
                    <Button className="hover:shadow-gray-600 bg-gray-400 mr-7 text-gray-900 ">
                      Inicio
                    </Button>
                  </a>
                </nav>
              </>
              <>
                <a class="flex lg:order-none title-font lg:w-full font-medium items-center text-gray-100 items-center justify-center mb-1 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10 text-white px-2 bg-indigo-500 rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <span class="ml-2 text-xl">NumberQuest</span>
                </a>
              </>
              <>
                <div class="lg:w-full inline-flex lg:justify-end ml-5 lg:ml-0">
                  <Button className="hover:shadow-gray-600 bg-gray-400 mr-7 text-gray-900 ">
                    Sing in
                  </Button>
                  <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
                    Register
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
              </>
            </div>
          </header>
        </div>
      </nav>
      <Layaut>
        <div className="p-2 rounded bg-blue-gray-900 w-auto flex flex-col">
          <h1 className="px-2 text-white text-xl">Logica Proposicional</h1>
          <Dropdown></Dropdown>
        </div>
        <div className="p-2 rounded bg-blue-gray-900 w-auto flex flex-col">
          <h1 className="px-2 text-white text-xl">Teoria de conjuntos</h1>
          <Dropdown></Dropdown>
        </div>
        <div className="p-2 rounded bg-blue-gray-900 w-auto flex flex-col">
          <h1 className="px-2 text-white text-xl">Funciones</h1>
          <Dropdown></Dropdown>
        </div>
      </Layaut>
      <Footer></Footer>
    </>
  );
};

export default ListaTemas;
