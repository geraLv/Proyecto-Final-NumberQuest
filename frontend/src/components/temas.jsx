import { Typography } from "@material-tailwind/react";
import React from "react";
import { ArrayTemas } from "../models/Temasdb";
import { ButtonDesplegable } from "./button_desplegable";

const Temas = () => {
  const currentPath = window.location.pathname;
  const idFromPath = currentPath.split("/").pop();
  const idEncontrada = parseInt(idFromPath);

  const filteredItems = ArrayTemas.filter(
    (tema) => parseInt(tema.unidad) === idEncontrada
  );

  const itemsToShow = filteredItems[0];
  if (itemsToShow) {
    console.log(
      `tema: ${itemsToShow.tema}, nroActividades: ${itemsToShow.nroActividades}`
    );
  } else {
    alert("no existe esta unidad");
  }

  return (
    <div className="h-auto rounded-xl">
      <ul className="col-span-4 space-y-2 flex w-full flex-col gap-1">
        {filteredItems.map(({ unidad, nroActividades, tema }, index) => (
          <div>
            <ButtonDesplegable
              tema={tema}
              nroActividades={nroActividades}
            ></ButtonDesplegable>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Temas;

// <a
//   className="flex bg-gray-600 border rounded p-2 px-4 items-center justify-between"
//   href={`/actividad`}
//   key={`${unidad}-${index}`}
// >
{
  /* <Typography className="flex text-gray-50">{tema}</Typography>
  <Typography className="p-1 rounded-xl bg-dark text-white">
    Actividades:{nroActividades}
  </Typography> */
}
// </a>
