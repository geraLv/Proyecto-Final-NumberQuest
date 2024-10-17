import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { MenuCustomList } from "./button-unidades";
import { ProfileMenu } from "./menuUser";
import { MenuCustomList2 } from "./button_literature";

const Navbar = () => {
  const [usuario, setUsuario] = useState({ loggedIn: false });
  useEffect(() => {
    fetch("http://localhost:4000/session", {
      credentials: "include",
    })
      .then((respuesta) => respuesta.json())
      .then((respuesta) => setUsuario(respuesta));
  }, []);
  return (
    <div className="grid h-full w-full items-start">
      <header class=" text-gray-100 body-font md:w-full">
        <div class="bg-nav h-28 mx-auto grid grid-cols-3 px-5 flex-col md:flex-row items-center">
          <nav className="flex w-full gap-1 flex-wrap items-center text-base md:ml-auto">
            <a href="/">
              <Button className="hover:shadow-gray-600 bg-button mr-7 text-white ">
                Inicio
              </Button>
            </a>
            <div className="gap-4 flex">
              <MenuCustomList></MenuCustomList>
              <MenuCustomList2></MenuCustomList2>
            </div>
          </nav>
          <a
            href="/"
            class="flex lg:order-none title-font lg:w-full font-medium items-center text-white justify-center mb-1 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white px-2 bg-black   rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-2 text-xl">NumberQuest</span>
          </a>

          {!usuario.loggedIn ? (
            <div class="lg:w-full inline-flex lg:justify-end ml-5 lg:ml-0">
              <a href="./login">
                <Button className="hover:shadow-gray-600 bg-button mr-7 text-white ">
                  Sing in
                </Button>
              </a>
              <a href="./register">
                <button class="inline-flex items-center bg-button border-0 py-1 h-12 px-3 focus:outline-none hover:bg-gray-200 rounded  md:mt-0 text-white">
                  Register
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </a>
            </div>
          ) : (
            <div className="flex flex-row space-x-8 justify-end w-full">
              <Button className="bg-gray-600">
                {usuario ? usuario.user.username : "no"}
              </Button>
              <ProfileMenu></ProfileMenu>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
