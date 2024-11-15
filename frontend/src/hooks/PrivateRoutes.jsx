import React from "react";
import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrtivateRoutes = () => {
  const [user, setUser] = useState({ loggedIn: false });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/session", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => setUser(response))
      .then(() => setLoading(true));
  }, []);
  return loading ? (
    user.loggedIn ? (
      <Outlet></Outlet>
    ) : (
      <Navigate to={"/login"}></Navigate>
    )
  ) : (
    <h1>No funca </h1>
  );
};

export default PrtivateRoutes;
