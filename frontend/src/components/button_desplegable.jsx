import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuHandler, Button } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ListaActividades } from "../models/ListaActividadesDB.js";
// import { TareaCorrecta } from "./act.jsx";
export function ButtonDesplegable({ tema, nroActividades }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  const menuActivities = ListaActividades.map(
    ({ url, title, description, isCompleted }) => ({
      url,
      title,
      description,
      isCompleted,
    })
  );

  // const [isCompleted, setIsCompleted] = useState(false);

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
            ? menuActivities.map(({ url, title, description, isCompleted }) => (
                <Link
                  to={url}
                  className="w-full h-full flex text-black px-2 py-1"
                >
                  <Button className="w-full text-start">{title}</Button>
                  {isCompleted ? (
                    <Button className="text-black w-1/5 text-start bg-lime-600">
                      Completada
                    </Button>
                  ) : (
                    <Button className="text-black w-1/5 text-start bg-gray-200">
                      incompleta
                    </Button>
                  )}
                </Link>
              ))
            : ""}
        </div>
      </MenuHandler>{" "}
    </Menu>
  );
}
