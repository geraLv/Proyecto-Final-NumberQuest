import React, { useEffect, useState } from "react";

const ActivitiesStatus = async (respuesta) => {
  const [actState, setActState] = useState(false);
  const [idAct, setIdAct] = useState();
  const [id_user, setId_user] = useState();

  const currentPath = window.location.pathname;
  const idFromPath = currentPath.split("/").pop();
  const idEncontrada = parseInt(idFromPath);

  useEffect(() => {
    try {
      console.log(respuesta);
      setActState(respuesta);
      idEncontrada === undefined
        ? console.log("no se encontro la id")
        : setIdAct(`act_${idEncontrada}`);
      // setIdAct(idEncontrada);
      // event.preventDefault();
      // setActState(!actState);
      fetch("http://localhost:4000/session", {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((response) => setId_user(response.user.id)),
        [];

      console.log(
        "idUsuario",
        id_user,
        "idActividad",
        idAct,
        "estadoAct",
        actState
      );
    } catch (error) {
      console.log("Error al obtener balores");
    }
  });
  actState === true
    ? fetch(
        "http://localhost:4000/actStatus",
        {
          credentials: "include",
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            actState,
            idAct,
            id_user,
          }),
        },
        []
      )
    : console.log("no se actualizo el estado");
};
export default ActivitiesStatus;
