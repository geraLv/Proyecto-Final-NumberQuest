import React, { useState } from 'react';

export const Actividad = () => {
    const [parte1, setParte1] = useState('');
    const [parte2, setParte2] = useState('');
    const [envio, setEnvio] = useState('');
    const [mostrarInputs, setMostrarInputs] = useState(true); // Para la primera actividad

    const answers = [
        '-4;4',
        '1/2'
    ];

    // Manejo de la primera actividad
    const handleParte1Change = (input) => {
        if (/^-?\d*\.?\d*$/.test(input)) { // Aceptar números negativos y decimales
            setParte1(input);
        }
    };

    const handleParte2Change = (input) => {
        if (/^-?\d*\.?\d*$/.test(input)) { // Aceptar números negativos y decimales
            setParte2(input);
        }
    };

    const handleSubmit = () => {
        if (parte1 === '' || parte2 === '' || isNaN(parte1) || isNaN(parte2)) {
            alert("Error: Debe ingresar un número válido");
        } else {
            const respuesta = `${parte1};${parte2}`;
            setEnvio(respuesta);
            setMostrarInputs(false); // Ocultar inputs al responder
        }
    };

    const textColor = envio === answers[0] ? 'green' : 'red';
    const validar = envio === answers[0] ? 'Correcto' : 'Incorrecto';
    
    return (
        <div className="main">
            
            <h1 style={{
                fontSize:  30
            }}><b>Dominio de funciones</b></h1>
            
            <p style={{
                color: '#AABFC6',
                marginTop:  '10px'

            }}>*Aclaración: Los números decimales se marcan con punto: "1.2"*</p>

            {/* Primera Actividad */}
            <div className='Act1' style={{ margin: '10px 10px 30px 10px' }}>
                <p style={{
                    fontSize:  19
                }}>Actividad 1:</p>
                <img src="../../public/img/funcion1.png" alt="Límite gráfico" />

                {mostrarInputs && (
                    <p>A) Indica el dominio de la función =
                    <div className="">
                        <input
                            type="text"
                            onChange={(e) => handleParte1Change(e.target.value)}
                            placeholder="xx"
                            maxLength="10"
                            style={{ width: '80px', padding: '5px' }}
                        />
                        <span>;</span>
                        <input
                            type="text"
                            onChange={(e) => handleParte2Change(e.target.value)}
                            placeholder="xx"
                            maxLength="10"
                            style={{ width: '80px', padding: '5px' }}
                        />
                    </div>
                    </p>
                )}
                
                {mostrarInputs && (
                    <button onClick={handleSubmit}>Responder</button>
                )}

                {envio && (
                    <div>
                        <h2>Respuesta Actividad 1:</h2>
                        <p style={{ color: textColor }}>{envio} es {validar}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
