import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-tailwind/react";
import Navbar from "./navbar";
import Footer from "./footer";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación básica
    if (!username || !password || !confirmPassword) {
      setMessage("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setMessage("Error al registrarse, intente de nuevo.");
        return;
      }

      const data = await response.json();
      console.log(data);
      // Redirigir a otra página o mostrar un mensaje de éxito
      window.location.href = "./login";
    } catch (error) {
      console.error("Error:", error);
      setMessage("Ocurrió un error, por favor intenta de nuevo.");
    }
  };

  return (
    <div className=" flex-row items-center space-y-10 ">
      <Navbar></Navbar>
      <div className="container w-3/5 row justify-center">
        <div className="bg-blue-gray-500 w-1/2 text-center p-7 rounded-xl rounded-r-none">
          <h1 className="text-white text-3xl">Bienvenido</h1>
          <p className="text-white p-8 text-xl">
            Registrece para axeder a todas las herramientas de la plataforma
          </p>
        </div>
        <div className="bg-dark shadow-2xl w-1/2 shadow-black rounded-xl rounded-l-none col-xs-10 col-md-6 col-sm-9 col-lg-5">
          <div className="bg-dark  opacity-90 card shadow-sm">
            <div className="card-body">
              <h3 className="text-center text-xl text-white mb-4">
                <h1>Registro</h1>
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label htmlFor="username">Usuario</label>
                </div>
                <div className="form-floating mb-5">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Contraseña</label>
                </div>
                <div className="form-floating mb-5">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirmar Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                </div>
                <button
                  type="submit"
                  className="h-10 rounded bg-blue-gray-600 text-gray-100 w-100"
                >
                  Registrarse
                </button>
                <p className="text-white py-3">
                  Ya tienes una cuenta?{" "}
                  <a href="./login">
                    <b>Inicia sesión aquí</b>
                  </a>
                </p>
              </form>
              {message && <p className="text-danger ">{message}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RegisterForm;
