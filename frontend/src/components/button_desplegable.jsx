import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuHandler, Button } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import ActComplete from "../models/ListaActividadesDB";
// import ListaActividades from "../models/ListaActividadesDB";
import { useState, useEffect } from "react";
// import { ListaActividades } from "../models/ListaActividadesDB";
// import { TareaCorrecta } from "./act.jsx";
export function ButtonDesplegable({ tema }) {
  const [nroActividades, setNroActividades] = useState(0);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [actUser, setActUser] = useState([]);
  const [idUser, setIdUser] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/session", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => setIdUser(parseInt(response.user.id)));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/actChek", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => setActUser(response))
      .then(() => setLoading(true));
  }, []);

  useEffect(() => {
    if (loading === true && idUser > 0 && actUser !== undefined) {
      setLista([
        {
          url: "/actividad/1",
          title: "Actividad 1: dominio de funciones",
          description: ``,
          isCompleted: actUser.resultado[idUser - 1].act_1,
        },
        {
          url: "/actividad/2",
          title: "Actividad 2: dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_2,
        },
        {
          url: "/actividad/3",
          title: "Actividad 3: dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_3,
        },
        {
          url: "/actividad/4",
          title: "Actividad 4: dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_4,
        },
        {
          url: "/actividad/5",
          title: "Actividad 5: dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_5,
        },
        {
          url: "/actividad/6",
          title: "Actividad 6: dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_5,
        },
        {
          url: "/actividad/7",
          title: "Actividad 7: dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_5,
        },
      ]);
    }
  }, [loading, actUser, idUser]);

  useEffect(() => {
    if (loading === true && idUser > 0 && actUser !== undefined) {
      setNroActividades(
        actUser.resultado[idUser - 1].act_1 +
          actUser.resultado[idUser - 1].act_2 +
          actUser.resultado[idUser - 1].act_3 +
          actUser.resultado[idUser - 1].act_4 +
          actUser.resultado[idUser - 1].act_5
      );
    }
  }, [loading, actUser, idUser]);

  return (
    <Menu className="w-auto h-full">
      <MenuHandler className="w-auto flex flex-col gap-2 bg-gray-600 rounded-xl text-white h-full">
        <div className="h-auto flex flex-col w-full gap-2 ">
          <div className="flex flex-row gap-2">
            <Button
              onClick={() => setOpenMenu(!openMenu)}
              className="h-12 w-full flex justify-between items-center gap-2 font-normal bg-gray-200 text-black "
            >
              <div className="flex">
                <h1 className="">{tema}</h1>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-4.5 w-3.5 transition-transform ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </div>
              {!openMenu ? (
                <div className="w-2/5 flex items-center gap-2">
                  <div className="space-x-2 rounded-lg border-1  border-black w-4/5 h-2">
                    <div
                      className={`bg-lime-600   h-full w-${nroActividades}/5`}
                    ></div>
                  </div>
                  <h1>{(nroActividades * 100) / 5}%</h1>
                </div>
              ) : (
                ""
              )}
            </Button>
          </div>
          {openMenu
            ? lista.map(({ url, title, description, isCompleted }) => (
                <Link
                  to={url}
                  className="w-full h-full flex text-black px-2 py-1"
                >
                  <Button className="flex  w-full text-center justify-between items-center">
                    {title}

                    {isCompleted ? (
                      <svg
                        className="w-8 h-8 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M18.333 6A3.667 3.667 0 0 1 22 9.667v8.666A3.667 3.667 0 0 1 18.333 22H9.667A3.667 3.667 0 0 1 6 18.333V9.667A3.667 3.667 0 0 1 9.667 6zM15 2c1.094 0 1.828.533 2.374 1.514a1 1 0 1 1-1.748.972C15.405 4.088 15.284 4 15 4H5c-.548 0-1 .452-1 1v9.998c0 .32.154.618.407.805l.1.065a1 1 0 1 1-.99 1.738A3 3 0 0 1 2 15V5c0-1.652 1.348-3 3-3zm1.293 9.293L13 14.585l-1.293-1.292a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </Button>
                </Link>
              ))
            : ""}
        </div>
      </MenuHandler>{" "}
    </Menu>
  );
}
