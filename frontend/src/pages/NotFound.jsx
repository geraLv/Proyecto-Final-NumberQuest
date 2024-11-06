import React from "react";
import { Link } from "react-router-dom";

const NotFoundPages = () => {
  return (
    <>
      <div className="flex flex-col place-items-stretch gap-2 h-100 container py-5">
        <h1 className="text-8xl">404</h1>
        <br></br>
        <h2 className="text-5xl">Página no encontrada</h2>
        <br></br>
        <p className="text-2xl">La página que buscas no existe</p>
        <br></br>
        <Link to={"/"} className="text-blue-gray-400 text-2xl">
          Volver a la pagina principal
        </Link>
        <Link to={"1"}>lala</Link>
      </div>
    </>
  );
};

export default NotFoundPages;
