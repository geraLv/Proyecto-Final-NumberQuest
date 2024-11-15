// import { Button } from "@material-tailwind/react";
// import React, { useState, useEffect } from "react";
import { ArrayTemas } from "../models/Temasdb";
import { ButtonDesplegable } from "./button_desplegable";
// import { H1Icon } from "@heroicons/react/24/outline";
// import { ActivitiesComplete } from "../hooks/ActivitiesComplete";

const Temas = () => {
  const currentPath = window.location.pathname;
  const idFromPath = currentPath.split("/").pop();
  const idEncontrada = parseInt(idFromPath);
  // () => console.log(actividades);
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
        {filteredItems.map(({ unidad, tema }, index) => (
          <div>
            <ButtonDesplegable tema={tema}></ButtonDesplegable>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Temas;
