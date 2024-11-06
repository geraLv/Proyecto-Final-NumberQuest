import React, { useEffect, useState } from "react";

const ActivitiesStatus = (respuesta) => {
  const [actState, setActState] = useState(false);
  const [idAct, setIdAct] = useState();
  const [id_user, setId_user] = useState();
  // setActState(respuesta);

  const id = () => {
    const currentPath = window.location.pathname;
    const idFromPath = currentPath.split("/").pop();
    const idEncontrada = parseInt(idFromPath);

    return console.log("hola");
    // !idEncontrada === ""
    //   ? setIdAct(parseInt(idEncontrada))
    //   : console.log("nose encontro la id");
  };
  useEffect(async () => {
    // event.preventDefault();
    // setActState(!actState);
    fetch("http://localhost:4000/session", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        setId_user(response);
      }, []);

    const response = fetch(
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
    );
    console.log(response);
    if (!response.ok) {
      console.log("Error al actualizar el estado de la actividad");
    }
  });
  return <div></div>;
};

export default ActivitiesStatus;
