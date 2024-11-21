import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../pages/loginForm";
import Login from "../pages/login";
import RegisterForm from "../pages/registerForm";
import Home from "../pages/Home";
import { Activities } from "../pages/activities";
import ListaTemas from "../pages/listaTemas";
// import { PrivateRoutes } from "./PrtivateRoutes";
import PrtivateRoutes from "../hooks/PrivateRoutes";
import NotFoundPages from "../pages/NotFound";
import BibliografiaLista from "../pages/Bibliografia";
// import App from "../App";

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFoundPages />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route element={<PrtivateRoutes />}>
            <Route path="/temas/*" element={<ListaTemas />}></Route>
            <Route path="/actividad/*" element={<Activities />}></Route>
            <Route path="/bibliografia" element={<BibliografiaLista />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
