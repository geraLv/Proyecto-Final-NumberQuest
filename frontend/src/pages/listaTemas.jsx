import React from "react";
import Navbar from "../components/navbar";
import Layaut from "../components/layaut";
import Footer from "../components/footer";
import Temas from "../components/temas";

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
