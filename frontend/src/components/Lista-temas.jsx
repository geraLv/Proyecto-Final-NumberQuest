import React from "react";
// import Navbar from "./navbar";
// import { MenuDefault } from "./button";
import Layaut from "./layaut";
import Dropdown from "./lista";
import Footer from "./footer";
import { Button } from "@material-tailwind/react";
import Navbar from "./navbar";

const desplegarLista = () => {
  document.getElementById("lista");
  desplegarLista.inerhtml(<h1>se cambio pa</h1>);
};

const ListaTemas = () => {
  return (
    <>
      <Navbar></Navbar>
      <Layaut>
        <div className="p-2 rounded bg-blue-gray-900 w-auto flex flex-row">
          <div className="flex flex-col text-xs w-1/5">
            <Button
              onClick={desplegarLista}
              className="bg-white px-2 text-black"
            >
              Logica Proposicional
            </Button>
            <Button className="bg-white px-2 text-black w-auto">
              Logica Proposicional
            </Button>
            <Button className="bg-white px-2 text-black w-auto">
              Logica Proposicional
            </Button>
            <Button className="bg-white px-2 text-black w-auto">
              Logica Proposicional
            </Button>
            <Button className="bg-white px-2 text-black w-auto">
              Logica Proposicional
            </Button>
            <Button className="bg-white px-2 text-black w-auto">
              Logica Proposicional
            </Button>
            <Button className="bg-white px-2 text-black w-auto">
              Logica Proposicional
            </Button>
            <Button className="bg-white px-2 text-black w-auto">
              Logica Proposicional
            </Button>
            <Button className="bg-white px-2 text-black w-auto">
              Logica Proposicional
            </Button>
            <Button className="bg-white px-2 text-black w-auto">
              Logica Proposicional
            </Button>
          </div>
          <div
            id="lista"
            className="w-full h-100 justify-center text-center text-white"
          >
            Seleccione una unidad
          </div>
        </div>
      </Layaut>
      <Footer></Footer>
    </>
  );
};

export default ListaTemas;
