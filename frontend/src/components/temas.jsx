import { ArrayTemas } from "../models/Temasdb";
import { ButtonDesplegable } from "./button_desplegable";
import { MenuUnidades } from "../models/Unidadesdb";

import functionImage from "../public/img/function.gif";
import { Card } from "@material-tailwind/react";
const Temas = () => {
  const currentPath = window.location.pathname;
  const idFromPath = currentPath.split("/").pop();
  const idEncontrada = parseInt(idFromPath);

  const tituloUnidad = MenuUnidades.filter(
    (title) => parseInt(title.id) === idEncontrada
  );

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
    <div className="container bg-gray-400 mt-5 mb-5  p-6 h-auto rounded-xl gap-5 flex flex-col ">
      <h1 className="text-3xl">{tituloUnidad[0].title}</h1>
      <div className="flex gap-2 justify-between bg-gray-800 rounded-xl p-4">
        {/* <Card
          color="black"
          shadow={false}
          className="col-span-3 flex h-auto w-1/5 items-center justify-center rounded-2xl"
        >
          <img className="bg-white rounded-md" src={functionImage} alt="" />
        </Card> */}
        <ul className="col-span-4 space-y-2 flex justify-start w-full flex-col gap-1">
          {filteredItems.map(({ tema }, index) => (
            <div>
              <ButtonDesplegable tema={tema}></ButtonDesplegable>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Temas;
