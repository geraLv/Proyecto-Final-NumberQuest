import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validación básica
        if (!username || !password || !confirmPassword) {
            setMessage('Por favor, completa todos los campos.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                setMessage('Error al registrarse, intente de nuevo.');
                return;
            }

            const data = await response.json();
            console.log(data);
            // Redirigir a otra página o mostrar un mensaje de éxito
            window.location.href = './login';

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
                            <h3 class="text-center mb-4">Registro</h3>
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
                                <div class="form-floating mb-3">
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="confirmPassword"
                                        placeholder="Confirmar Contraseña"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Registrarse</button>
                                <p>Ya tienes una cuenta? <a href="./login"><b>Inicia sesión aquí</b></a></p>
                            </form>
                            {message && <p class="text-danger mt-3">{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
