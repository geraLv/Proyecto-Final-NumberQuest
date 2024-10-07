import React from "react";
import Navbar from "./navbar";
import Layaut from "./layaut";
import Footer from "./footer";
import Temas from "./temas";

const ListaTemas = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Layaut>
        <Temas></Temas>
      </Layaut>
      <Footer></Footer>
    </div>
  );
};

export default ListaTemas;
