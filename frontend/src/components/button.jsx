import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <Button className="w-25 hover:shadow-gray-600 bg-gray-400 mr-7 text-gray-900">
          Unidades
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
