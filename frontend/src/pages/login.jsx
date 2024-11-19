import React from "react";
import LoginForm from "./loginForm";
import Navbar from "../components/navbar";
const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-5">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};
export default Login;
