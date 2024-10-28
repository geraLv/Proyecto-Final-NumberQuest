import React from "react";
import Navbar from "../components/navbar";
import Layaut from "../components/layaut";
import Footer from "../components/footer";
import Temas from "../components/temas";

const ListaTemas = () => {
  async () => {
    const response = await fetch("http://localhost:4000/session", {
      method: "GET",
      credentials: "include",
    });
    console.log({ response });

    if (response.ok) {
      const data = await response.json();
      document.getElementById();
    }
  };
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
