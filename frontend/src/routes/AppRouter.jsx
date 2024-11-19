import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "../pages/loginForm";
import RegisterForm from "../pages/registerForm";
import Home from "../pages/Home";
import { Activities } from "../pages/activities";
import ListaTemas from "../pages/listaTemas";
// import { PrivateRoutes } from "./PrtivateRoutes";
import PrtivateRoutes from "../hooks/PrivateRoutes";
import NotFoundPages from "../pages/NotFound";
// import App from "../App";

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFoundPages />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route element={<PrtivateRoutes />}>
            <Route path="/temas/*" element={<ListaTemas />}></Route>
            <Route path="/actividad/*" element={<Activities />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
