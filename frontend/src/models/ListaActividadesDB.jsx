import { useState, useEffect } from "react";

const ActComplete = () => {
  const [actUser, setActUser] = useState([]);
  const [idUser, setIdUser] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/session", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => setIdUser(parseInt(response.user.id)));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/actChek", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => setActUser(response))
      .then(() => setLoading(true));
  }, []);

  useEffect(() => {
    console.log(loading);
    if (loading === true && idUser > 0 && actUser !== undefined) {
      setLista([
        {
          url: "/actividad/1",
          title: "Actividad 1: Dominio de funciones",
          description: ``,
          isCompleted: actUser.resultado[idUser - 1].act_1,
        },
        {
          url: "/actividad/2",
          title: "Actividad 2: Dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_2,
        },
        {
          url: "/actividad/3",
          title: "Actividad 3: Dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_3,
        },
        {
          url: "/actividad/4",
          title: "Actividad 4: Dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_4,
        },
        {
          url: "/actividad/5",
          title: "Actividad 4: dominio de funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 1].act_5,
        },
      ]);
    }
  }, [loading, actUser, idUser]);
  console.log(lista);
  return lista;
};

export default ActComplete;
