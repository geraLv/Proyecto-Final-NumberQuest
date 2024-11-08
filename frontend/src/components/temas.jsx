// import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { ArrayTemas } from "../models/Temasdb";
import { ButtonDesplegable } from "./button_desplegable";
// import { H1Icon } from "@heroicons/react/24/outline";
// import { ActivitiesComplete } from "../hooks/ActivitiesComplete";

const Temas = () => {
  const [actividades, setActividades] = useState();
  const [loading, setLoading] = useState(false);
  const currentPath = window.location.pathname;
  const idFromPath = currentPath.split("/").pop();
  const idEncontrada = parseInt(idFromPath);
  () => console.log(actividades);
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
  useEffect(() => {
    fetch("http://localhost:4000/actChek", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        setActividades(response);
      })
      .then(() => setLoading(true)),
      [];
  }, []);

  console.log(actividades[0]);

  return loading ? (
    <div className="h-auto rounded-xl">
      {/* <Button onClick={ActivitiesComplete()}></Button> */}
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
  ) : (
    <h1>cargando</h1>
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
