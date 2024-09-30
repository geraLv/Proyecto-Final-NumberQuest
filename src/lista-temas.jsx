import React from "react";
import NavBar from "./components/navbar";
import { MenuDefault } from "./components/button";
import Layaut from "./components/layaut";
import Dropdown from "./components/lista";

const ListaTemas = () => {
  return (
    <>
      <NavBar></NavBar>
      <Layaut>
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
      </Layaut>
    </>
  );
};

export default ListaTemas;
