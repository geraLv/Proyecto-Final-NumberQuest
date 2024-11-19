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
  return (
    <div className=" bg-home">
      <Navbar></Navbar>

      <Temas></Temas>

      <Footer></Footer>
    </div>
  );
};

export default ListaTemas;
