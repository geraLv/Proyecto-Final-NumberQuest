import React from "react";
import NavBar from "../components/navbar";
import { Actividad } from "../activities/act";
import { Actividad1p } from "../activities/act1p";
// import { Actividad3 } from "../activities/act3";
import Layaut from "../components/layaut";
import Teclado from "../components/teclado";
import Footer from "../components/footer";
import { ActivitiesDB } from "../models/ActivitisDB";
import { Actividad3 } from "../activities/act3";
import { Navigate } from "react-router-dom";

export function Activities() {
  const act = ActivitiesDB.map(({ url, title, description, isCompleted }) => ({
    url,
    title,
    description,
    isCompleted,
  }));

  const currentPath = window.location.pathname;
  const idFromPath = currentPath.split("/").pop();
  const idEncontrada = parseInt(idFromPath);

  return (
    <>
      <NavBar />
      <Layaut>
        <div>
          {idEncontrada === 1 ? (
            <Actividad></Actividad>
          ) : idEncontrada === 2 ? (
            <Actividad1p></Actividad1p>
          ) : idEncontrada === 3 ? (
            <Actividad3></Actividad3>
          ) : idEncontrada > 3 ? (
            <Navigate to={"/-1"} />
          ) : null}
        </div>
      </Layaut>
      <Footer></Footer>
    </>
  );
}
