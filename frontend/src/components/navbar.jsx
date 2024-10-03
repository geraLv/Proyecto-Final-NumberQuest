import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { MenuDefault } from "./button";
import LogoutButton from "./loggoutButton"; // Importa el nuevo componente

const Navbar = () => {
  const [usuario, setUsuario] = useState({loggedIn : false});
  useEffect(() => {
    fetch('http://localhost:4000/session', {
      credentials: "include"
    })
      .then((respuesta) => respuesta.json())
      .then((respuesta) => setUsuario(respuesta));
  }, [])

  const handleLogout = () => {
    setUsuario({loggedIn: false});
    window.location.reload() // Actualiza el estado para eliminar el usuario
  };
    return (
//       <div>
//       <header className="mb-10  text-gray-100 body-font md:w-full ">
//         <div className="bg-dark h-28 mx-auto grid grid-cols-3 px-5 flex-col md:flex-row items-center">
//           <nav className="gap-1 flex lg:w-full flex-wrap flex-row items-center text-base md:ml-auto">
//             <Button className="hover:shadow-gray-600 bg-gray-400 mr-7 text-gray-900">
//               Home
//             </Button>
//             <MenuDefault>Unidades</MenuDefault>
//           </nav>
//           <a className="flex lg:order-none title-font lg:w-full font-medium items-center text-gray-100 lg:items-center lg:justify-center mb-4 md:mb-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-10 h-10 text-white px-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24"
//               >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-2 text-xl">NumberQuest</span>
//           </a>
//           {!usuario.loggedIn ? (
//             <div className="lg:w-full inline-flex lg:justify-end ml-5 lg:ml-0">
//               <Button className="hover:shadow-gray-600 bg-gray-400 mr-7 text-gray-900">
//                 <a href="./login">Sign in</a>
//               </Button>
//               <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0">
//                 <a href="./register">Register</a>
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-4 h-4 ml-1"
//                   viewBox="0 0 24 24"
//                   >
//                   <path d="M5 12h14M12 5l7 7-7 7"></path>
//                 </svg>
//               </button>
//             </div>
//           ) : (
//             <div className="flex flex-row space-x-8 justify-end w-full">
//               <Button className="bg-gray-600">{usuario ? usuario.user.username : "no"}</Button>
//               <LogoutButton onLogout={handleLogout} /> {/* Usar LogoutButton aquí */}
//             </div>
//           )}
//         </div>
//       </header>
//     </div>
//   )
// }

// export default Navbar;

// import React from "react";
// import { Button } from "@material-tailwind/react";
// import { MenuDefault } from "./button";

// const Navbar = () => {
//   return (
    <div>
      <header class=" text-gray-100 body-font md:w-full">
        <div class="bg-dark h-28 mx-auto grid grid-cols-3 px-5 flex-col md:flex-row items-center">
          
            <nav className="gap-1 flex lg:w-full flex-wrap flex-row items-center text-base md:ml-auto">
              <Button className="hover:shadow-gray-600 bg-gray-400 mr-7 text-gray-900 ">
                First Link
              </Button>

              <MenuDefault>Unidades</MenuDefault>
            </nav>
            <a class="flex lg:order-none title-font lg:w-full font-medium items-center text-gray-100 items-center justify-center mb-1 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white px-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-2 text-xl">NumberQuest</span>
            </a>

          {!usuario.loggedIn ? (
            <div class="lg:w-full inline-flex lg:justify-end ml-5 lg:ml-0">
              <a href="./login"><Button className="hover:shadow-gray-600 bg-gray-400 mr-7 text-gray-900 ">
                Sing in
              </Button>
              </a>
              <a href="./register"><button class="inline-flex items-center bg-gray-800 border-0 py-1 h-12 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
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
    <Button className="bg-gray-600">{usuario ? usuario.user.username : "no"}</Button>
    <LogoutButton onLogout={handleLogout} /> {/* Usar LogoutButton aquí */}
  </div>
)}
        </div>
      </header>
    </div>
  );
};

export default Navbar;