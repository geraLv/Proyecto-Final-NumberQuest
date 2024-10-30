import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../pages/loginForm";
import RegisterForm from "../pages/registerForm";
import Home from "../pages/Home";
import { Activities } from "../pages/activities";
import ListaTemas from "../pages/listaTemas";
import { PrivateRoutes } from "./private.Routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<>Not Found</>}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route element={PrivateRoutes}>
          <Route path="/temas/1" element={<ListaTemas />}></Route>
          <Route path="/actividad" element={<Activities />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
