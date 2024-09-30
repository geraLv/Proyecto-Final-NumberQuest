import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";

const AppRouter = () =>{
return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<h1>la pagina principal va aca</h1>}/>
    <Route path="/login" element={<LoginForm />}></Route>
    <Route path="/register" element={<RegisterForm />}></Route>
    </Routes>
    </BrowserRouter>
)}

export default AppRouter