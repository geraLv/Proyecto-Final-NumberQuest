import { useState, useEffect } from "react";

const ActComplete = () => {
  const [actUser, setActUser] = useState();
  const [idUser, setIdUser] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/session", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => setIdUser(response.user.id));

    fetch("http://localhost:4000/actChek", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => {
        setActUser(response);
      }),
      [];
  }, []);
  return actUser, idUser;
};

export default ActComplete;
