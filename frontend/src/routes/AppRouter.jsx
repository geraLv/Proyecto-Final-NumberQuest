import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
import Home from "../components/Home";
import ListaTemas from "../components/Lista-temas";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/temas" element={<ListaTemas />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
