import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
// import { Activities } from "../activities";
// import { Actividad } from "../components/act";
import { Activities } from "../components/activities";
import ListaTemas from "../components/Lista-temas";
import Home from "../components/Home";

const AppRouter = () =>{
return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LoginForm />}></Route>
    <Route path="/register" element={<RegisterForm />}></Route>
    <Route path="/unidades" element={<ListaTemas />}></Route>
    <Route path="/actividad" element={<Activities />}></Route>
    </Routes>
    </BrowserRouter>
)}

export default AppRouter