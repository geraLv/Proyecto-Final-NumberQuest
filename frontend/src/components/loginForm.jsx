import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, button } from "@material-tailwind/react";
import Navbar from "./navbar";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación básica
    if (!username || !password) {
      setMessage("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        credentials: "include", // Importante para enviar las cookies de sesión
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setMessage("Credenciales inválidas");
        setTimeout(() => setMessage(""), 3500);
        return;
      }

      const data = await response.json();
      console.log(data);
      window.location.href = "./";
    } catch (error) {
      console.error("Error:", error);
      setMessage("Ocurrió un error, por favor intenta de nuevo.");
    }
  };

  return (
    <div className="flex-row items-center space-y-10">
      <Navbar></Navbar>
      <div className="container row w-3/5 justify-center">
        <div className="bg-blue-gray-500 w-1/2 text-center p-7 rounded-xl rounded-r-none"></div>
        <div className="bg-dark w-1/2 h-auto shadow-2xl shadow-black rounded-xl rounded-l-none col-xs-10 col-md-6 col-sm-9 col-lg-5">
          <div className="bg-dark  opacity-90 card shadow-sm">
            <div className="card-body">
              <h3 className="text-center text-xl text-white mb-4">
                Inicio de Sesión
              </h3>
              <form
                onSubmit={handleSubmit}
                className="jsutify-start flex flex-col"
              >
                <div className="form-floating  h-36">
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
                <button
                  type="submit"
                  className="h-10 rounded bg-blue-gray-600 text-gray-100 w-100"
                >
                  Ingresar
                </button>
                <p className="text-white py-3">
                  Si no tiene una cuenta{" "}
                  <a href="register">
                    <b>ingrese aqui</b>
                  </a>
                </p>
              </form>
              {message && <p className="text-danger mt-3">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

// fetch("/rutapost",{
//     method:"POST",
//     body:JSON.stringify({}),
//     headers:{
//         "Content-Type":"Application/Json"
//     }
// });
