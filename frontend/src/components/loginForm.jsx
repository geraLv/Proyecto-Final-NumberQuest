import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, button } from "@material-tailwind/react";

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
      <nav className="px-5 space-x-5 flex justify-start w-full h-32 items-center bg-dark">
        <a class="flex  justify-center lg:order-none title-font h-full font-medium  text-gray-100 lg:items-center  mb-1 md:mb-0">
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
        <a href="./">
          {" "}
          <Button className="self-center shadow-md shadow-black bg-gray-100 h-11 text-gray-900">
            Inicio
          </Button>
        </a>
      </nav>
      <div className="w-full row justify-center">
        <div className="bg-dark shadow-2xl shadow-black rounded-xl col-xs-10 col-md-6 col-sm-9 col-lg-5">
          <div className="bg-dark  opacity-90 card shadow-sm">
            <div className="card-body">
              <h3 className="text-center text-xl text-white mb-4">
                Inicio de Sesión
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-4">
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
