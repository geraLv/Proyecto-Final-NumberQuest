import React, { useState } from 'react';

export const Actividad = () => {
    const [parte1, setParte1] = useState('');
    const [parte2, setParte2] = useState('');
    const [envio, setEnvio] = useState('');
    const [mostrarInputs, setMostrarInputs] = useState(true); // Para la primera actividad

    const [parte1Actividad2, setParte1Actividad2] = useState('');
    const [parte2Actividad2, setParte2Actividad2] = useState('');
    const [envioActividad2, setEnvioActividad2] = useState('');
    const [mostrarInputsActividad2, setMostrarInputsActividad2] = useState(true); // Para la segunda actividad

    // Manejo de la primera actividad
    const handleParte1Change = (input) => {
        if (/^\d{0,3}$/.test(input)) {
            setParte1(input);
        }
    };

    const handleParte2Change = (input) => {
        if (/^\d{0,3}$/.test(input)) {
            setParte2(input);
        } 
    };

    const handleSubmit = () => {
        if (parte1 === '' || parte2 === '' || isNaN(parte1) || isNaN(parte2)) {
            alert("Error: Debe ingresar un número entero");
        } else {
            const respuesta = `${parte1}/${parte2}`;
            setEnvio(respuesta);
            setMostrarInputs(false); // Ocultar inputs al responder
        }
    };

    // Manejo de la segunda actividad
    const handleParte1Actividad2Change = (input) => {
        if (/^\d{0,3}$/.test(input)) {
            setParte1Actividad2(input);
        }
    };

    const handleParte2Actividad2Change = (input) => {
        if (/^\d{0,3}$/.test(input)) {
            setParte2Actividad2(input);
        } 
    };

    const handleSubmitActividad2 = () => {
        if (parte1Actividad2 === '' || parte2Actividad2 === '' || isNaN(parte1Actividad2) || isNaN(parte2Actividad2)) {
            alert("Error: Debe ingresar un número entero");
        } else {
            const respuestaActividad2 = `${parte1Actividad2}/${parte2Actividad2}`;
            setEnvioActividad2(respuestaActividad2);
            setMostrarInputsActividad2(false); // Ocultar inputs al responder
        }
    };

    const textColor = envio === '-3/2' ? 'green' : 'red';
    const validar = envio === '-3/2' ? 'Correcta' : 'Incorrecta';

    const textColorActividad2 = envioActividad2 === '33/33' ? 'green' : 'red';
    const validarActividad2 = envioActividad2 === '33/33' ? 'Correcta' : 'Incorrecta';   
    
    
    return (
        <div className="main">
            
            <h1>Límites gráficos</h1>

{/* Segunda Actividad */}


            <div className='Act1'
             style={{
                margin:  '10px 10px 30px 10px',

            }}>
            <p>Actividad 1</p>
            <img src="../../public/img/limite-grafico1.png" alt="Límite gráfico" />

            {mostrarInputs && (
                <p>A) Indica el dominio de definición =
                    <input
                        type="text"
                        onChange={(e) => handleParte1Change(e.target.value)}
                        placeholder="xx"
                        maxLength="3"
                        style={{ width: '40px', padding: '5px' }}
                    />
                    <span>/</span>
                    <input
                        type="text"
                        onChange={(e) => handleParte2Change(e.target.value)}
                        placeholder="xx"
                        maxLength="3"
                        style={{ width: '40px', padding: '5px' }}
                    />
                </p>
            )}
            
            {mostrarInputs && (
                <button onClick={handleSubmit}>Responder</button>
            )}

            {envio && (
                <div>
                    <h2>Tu respuesta de Actividad 1 es:</h2>
                    <p style={{ color: textColor }}>{envio} es {validar}</p>
                </div>
            )}
            </div>




{/* Segunda Actividad */}

            <div className='act2'>
            
            <h1>Actividad 2</h1>
            <img src="https://st3.depositphotos.com/7863750/16404/i/950/depositphotos_164041100-stock-photo-cat-soldier-with-gun.jpg" alt="Límite gráfico" style={{
                width: '509px',
                height: '351px',
            }} />
            <p>B) Indica el rango de definición =
                {mostrarInputsActividad2 && (
                    <>
                        <input
                            type="text"
                            onChange={(e) => handleParte1Actividad2Change(e.target.value)}
                            placeholder="xx"
                            maxLength="3"
                            style={{ width: '30px', padding: '5px' }}
                        />
                        <span>/</span>
                        <input
                            type="text"
                            onChange={(e) => handleParte2Actividad2Change(e.target.value)}
                            placeholder="xx"
                            maxLength="3"
                            style={{ width: '50px', padding: '5px' }}
                        />
                    </>
                )}
            </p>
            {mostrarInputsActividad2 && (
                <button onClick={handleSubmitActividad2}>Responder</button>
            )}

            {envioActividad2 && (
                <div>
                    <h2>Tu respuesta de Actividad 2 es:</h2>
                    <p style={{ color: textColorActividad2 }}>{envioActividad2} es {validarActividad2}</p>
                </div>
            )}
        </div>
        </div>
    );
};
