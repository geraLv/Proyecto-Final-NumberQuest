import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-tailwind/react";

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
    <div className="flex-row items-center space-y-10 ">
      <nav className="px-5 space-x-5 flex items-center justify-start w-full h-32 bg-dark">
        <a  class="flex  justify-center lg:order-none title-font h-auto font-medium  text-gray-100 items-center  mb-1 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white px-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-2 text-xl">NumberQuest</span>
        </a>
        <a href="./"><Button className="self-center shadow-md shadow-black bg-gray-100 h-auto text-gray-900">
          Inicio
        </Button>
        </a>
      </nav>
      <div className=" w-full row justify-center">
        <div className="bg-dark shadow-2xl shadow-black rounded-xl col-xs-10 col-md-6 col-sm-9 col-lg-5">
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
    </div>
  );
};

export default RegisterForm;