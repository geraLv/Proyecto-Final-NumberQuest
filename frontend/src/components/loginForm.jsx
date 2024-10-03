import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validación básica
        if (!username || !password) {
            setMessage('Por favor, completa todos los campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                credentials: 'include', // Importante para enviar las cookies de sesión
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                setMessage('Credenciales inválidas');
                setTimeout(() => setMessage(''), 3500);
                return;
            }

            const data = await response.json();
            console.log(data);
            window.location.href = '/';

        } catch (error) {
            console.error('Error:', error);
            setMessage('Ocurrió un error, por favor intenta de nuevo.');
        }
    };

    return (
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-xs-10 col-md-6 col-sm-9 col-lg-5">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="text-center mb-4">Inicio de Sesión</h3>
                            <form onSubmit={handleSubmit}>
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="username"
                                        placeholder="Usuario"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="username">Usuario</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Ingresar</button>
                                <p>Si no tiene una cuenta <a href="./register"><b>ingrese aqui</b></a></p>
                            </form>
                            {message && <p class="text-danger mt-3">{message}</p>}
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