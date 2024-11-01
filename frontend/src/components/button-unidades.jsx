import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MenuUnidades } from "../models/Unidadesdb";

export function MenuCustomList() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const menuItems = MenuUnidades.map(({ url, title, description }) => ({
    url,
    title,
    description,
  }));
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
              openMenu ? "rotate-180 " : "w"
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
