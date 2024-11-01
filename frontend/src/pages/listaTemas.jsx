// import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../components/navbar";
import Layaut from "../components/layaut";
import Footer from "../components/footer";
import Temas from "../components/temas";
// import { ButtonDesplegable } from "../components/button_desplegable";
// import { Navigate } from "react-router-dom";
// import PrtivateRoutes from "../hooks/PrtivateRoutes";

const ListaTemas = () => {
  // const [user, setUser] = useState({ loggedIn: false });
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:4000/session", {
  //     credentials: "include",
  //   })
  //     .then((response) => response.json())
  //     .then((response) => setUser(response))
  //     .then(() => setLoading(true));
  // }, []);
  // return loading ? (
  //   user.loggedIn ? (
  return (
    <div>
      <Navbar></Navbar>
      <Layaut>
        <Temas></Temas>
      </Layaut>
      <Footer></Footer>
    </div>
  );
  //   ) : (
  //     <Navigate to={"/login"}></Navigate>
  //   )
  // ) : (
  //   <h1>No funca </h1>
  // );
};

export default ListaTemas;
