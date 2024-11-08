import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { useState } from "react";

export const ActivitiesComplete = () => {
  const [actividades, setActividades] = useState();
  useEffect(
    () =>
      fetch("http://localhost:4000/actChek", {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((response) => {
          setActividades(response);
        }),
    []
  );
  return actividades;
};
