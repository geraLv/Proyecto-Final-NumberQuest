import React, { useState } from 'react';

export const Actividad = () => {
    const [parte1, setParte1] = useState('');
    const [parte2, setParte2] = useState('');
    const [envio, setEnvio] = useState('');
    const [mostrarInputs, setMostrarInputs] = useState(true); // Para la primera actividad

    const answers = [
        '-4 ; 4',
        '1 ; 3.4'
    ]; //Array con los Dominios correctos de las funciones

    const imgRes = [
        <img src="https://th.bing.com/th/id/OIP.OFQpZjI_YOwDZoYnXh1VzwHaD_?rs=1&pid=ImgDetMain" alt="Incorrecto" />,
        <img src="https://th.bing.com/th/id/OIP.2IU--_lJKHd3j90ik90CfgHaFj?w=265&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Correcto" />
    ];

    // Manejo de la primera actividad
    const handleParte1Change = (input) => {
        if (/^-?\d*\.?\d*$/.test(input)) { // Acepta números negativos y decimales
            setParte1(input);
        }
    };

    const handleParte2Change = (input) => {
        if (/^-?\d*\.?\d*$/.test(input)) { // Acepta números negativos y decimales
            setParte2(input);
        }
    };

    const handleSubmit = () => {
        if (parte1 === '' || parte2 === '' || isNaN(parte1) || isNaN(parte2)) {
            alert("Error: Debe ingresar un número válido");
        } else {
            const respuesta = `${parte1} ; ${parte2}`;
            setEnvio(respuesta);
            setMostrarInputs(false); // Oculta los inputs al responder
        }
    };

    const validar = envio === answers[0] ? 'Correcto' : 'Incorrecto';

    return (
        <div className="main">
            <h1 style={{ fontSize: 30 }}><b>Dominio de funciones</b></h1>
            <p style={{ color: '#AABFC6', marginTop: '10px' }}>*Aclaración: Los números decimales se marcan con punto: "1.2"*</p>

            <div className='Act1' style={{ margin: '10px 10px 30px 10px' }}>
                <p style={{ fontSize: 20, marginBottom: '10px' }}>Actividad 1:</p>
                <div style={{ marginBottom: '10px' }}>A) <img src="../../public/img/funcion1.png" alt="Límite gráfico" /></div>

                {mostrarInputs && (
                    <p style={{ fontSize: 17 }}>A) Indica el dominio de la función =
                        <div className="" style={{ marginTop: '10px' }}>
                            <input
                                type="text"
                                onChange={(e) => handleParte1Change(e.target.value)}
                                placeholder="(-x.x)"
                                maxLength="4"
                                style={{ width: '70px', padding: '3px', backgroundColor: '#D9DDDE', borderRadius: '5px', border: 'solid, black, 2px' }}
                            />
                            <span style={{ fontSize: 20, margin: '0px 5px 9px 5px' }}>;</span>
                            <input
                                type="text"
                                onChange={(e) => handleParte2Change(e.target.value)}
                                placeholder="(-x.x)"
                                maxLength="4"
                                style={{ width: '70px', padding: '3px', backgroundColor: '#D9DDDE', borderRadius: '5px', border: 'solid, black, 2px' }}
                            />
                            {mostrarInputs && (
                                <button onClick={handleSubmit} style={{
                                    backgroundColor: '#AABFC6',
                                    color: '#000',
                                    marginLeft: '10px',
                                    padding: '5px',
                                    border: 'solid, black, 2px',
                                    borderRadius: '5px',
                                }}>Responder</button>
                            )}
                        </div>
                    </p>
                )}

                {envio && (
                    <div>
                        <p style={{ color: validar === 'Correcto' ? 'green' : 'red', fontSize: 18 }}>
                            Dominio: ( {envio} ) es {validar}
                        </p>
                        <p>{validar === 'Correcto' ? imgRes[1] : imgRes[0]}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
