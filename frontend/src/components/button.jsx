import {
  Menu,
  MenuHandler,
  // MenuList,
  // MenuItem,
  Button,
} from "@material-tailwind/react";

export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <a href="./unidades">
          <Button className="w-25 hover:shadow-gray-600 bg-gray-400 mr-7 text-gray-900">
            Unidades
          </Button>
        </a>
      </MenuHandler>
    </Menu>
  );
}
