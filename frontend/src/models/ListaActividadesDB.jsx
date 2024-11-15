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
          title: "Actividad 1: Lógica proposicional",
          description: ``,
          isCompleted: actUser.resultado[idUser - 3].act_1,
        },
        {
          url: "/actividad/2",
          title: "Actividad 2: Teoría de conjuntos",
          description: "",
          isCompleted: actUser.resultado[idUser - 3].act_2,
        },
        {
          url: "/actividad/3",
          title: "Actividad 3: Funciones",
          description: "",
          isCompleted: actUser.resultado[idUser - 3].act_3,
        },
        {
          url: "/actividad/4",
          title: "Actividad 4: Matrices",
          description: "",
          isCompleted: actUser.resultado[idUser - 3].act_4,
        },
        {
          url: "/actividad/5",
          title: "Actividad 4: Matrices",
          description: "",
          isCompleted: actUser.resultado[idUser - 3].act_5,
        },
      ]);
    }
  }, [loading, actUser, idUser]);
  console.log(lista);
  return lista;
};

export default ActComplete;
