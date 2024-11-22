import React from "react";
import LoginForm from "./loginForm";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-5">
        <LoginForm></LoginForm>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Login;
