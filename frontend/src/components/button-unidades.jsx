import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

const menuItems = [
  {
    url: "/temas/1",
    title: "Unidad N°1: Lógica proposicional",
    description: ``,
  },
  {
    url: "./temas/2",
    title: "Unidad N°2: Teoría de conjuntos",
    description: "",
  },
  {
    url: "./temas/3",
    title: "Unidad N°3: Funciones",
    description: "",
  },
  {
    url: "./temas/3",
    title: "Unidad N°4: Matrices",
    description: "",
  },
  {
    url: "./temas/5",
    title: "Unidad N°5: Limites",
    description: "",
  },
  {
    url: "./temas/3",
    title: "Unidad N°6: Derivadas",
    description: "",
  },
  {
    url: "./temas/3",
    title: "Unidad N°7: Integrales",
    description: "",
  },
];

export function MenuCustomList() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu
      className="w-auto h-full"
      lockScroll="True"
      open={openMenu}
      handler={setOpenMenu}
      allowHover
    >
      <MenuHandler className="w-auto flex gap-2 bg-trasparent text-white h-full">
        <Button className=" h-12 w-auto flex items-center gap-3 text-base font-normal capitalize tracking-normal text-black">
          <h1 className="">Unidades</h1>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-2.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="h-auto w-2/6 border-0 bg-gray-400 rounded-xl overflow-visible">
        <ul className="h-auto grid-cols-1 rounded-2xl gap-3 shadow-sm shadow-black bg-gray-400 grid w-full">
          {menuItems.map(({ title, url, description }) => (
            <a href={url} key={title}>
              <MenuItem className="bg-gray-200 shadow-lg shadow-black border-0 w-full text-left px-4 items-center py-3 rounded-xl">
                <Typography variant="h6" color="blue-gray">
                  {title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}
