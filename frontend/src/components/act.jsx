import React, { useState } from 'react';

export const Actividad = () => {
    const [parte1, setParte1] = useState('');
    const [parte2, setParte2] = useState('');
    const [parte1B, setParte1B] = useState('');
    const [parte2B, setParte2B] = useState('');
    const [envio, setEnvio] = useState('');
    const [envioB, setEnvioB] = useState('');
    const [mostrarInputsA, setMostrarInputsA] = useState(true);
    const [mostrarResultadoA, setMostrarResultadoA] = useState(false);
    const [mostrarInputsB, setMostrarInputsB] = useState(false);
    const [mostrarResultadoB, setMostrarResultadoB] = useState(false);
    const [mostrarB, setMostrarB] = useState(false);
    const [mostrarA, setMostrarA] = useState(true);

    const answers = ['-4 ; 4', '-inf,0 U 1/4,+inf'];
    const imgRes = [
        <img style={{ width: 560, height: 292 }} src="https://th.bing.com/th/id/OIP.k6H2Q8P1DKlgmf4tMLFwvgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3" alt="" />,
        <img src="https://media.licdn.com/dms/image/C5112AQEYARonHijMaQ/article-cover_image-shrink_600_2000/0/1549770046623?e=2147483647&v=beta&t=9B-KDNvL_mfs2VrOXKrsHf8T5NMG2MXAKCi5i89cXeE" alt="" />
    ];

    const handleParte1Change = (input) => {
        if (/^-?\d*\.?\d*$/.test(input)) {
            setParte1(input);
        }
    };

    const handleParte2Change = (input) => {
        if (/^-?\d*\.?\d*$/.test(input)) {
            setParte2(input);
        }
    };

    const handleParte1BChange = (input) => {
        if (/^-?\d*\.?\d*$/.test(input)) {
            setParte1B(input);
        }
    };

    const handleParte2BChange = (input) => {
        if (/^-?\d*\.?\d*$/.test(input)) {
            setParte2B(input);
        }
    };

    const handleSubmit = () => {
        if (parte1 === '' || parte2 === '' || isNaN(parte1) || isNaN(parte2)) {
            alert("Error: Debe ingresar un número válido");
        } else {
            const respuesta = `${parte1} ; ${parte2}`;
            setEnvio(respuesta);
            setMostrarResultadoA(true);
            setMostrarInputsA(false);
        }
    };

    const handleSubmitB = () => {
        if (parte1B === '' || parte2B === '' || isNaN(parte1B) || isNaN(parte2B)) {
            alert("Error: Debe ingresar un número válido");
        } else {
            const respuestaB = `${parte1B} U ${parte2B}`;
            setEnvioB(respuestaB);
            setMostrarResultadoB(true);
            setMostrarInputsB(false);
        }
    };

    const validar = envio === answers[0] ? 'Correcto' : 'Incorrecto';
    const validarB = envioB === answers[1] ? 'Correcto' : 'Incorrecto';

    const handleNext = () => {
        setMostrarB(true);
        setMostrarResultadoA(false);
        setMostrarA(false);
        setMostrarResultadoB(true); // Oculta el resultado de B
        setMostrarInputsB(true); // Oculta los inputs de B
    };

    return (
        <div className="main">
            <h1 style={{ fontSize: 30 }}><b>Dominio de funciones</b></h1>
            <p style={{ color: '#AABFC6', marginTop: '10px' }}>*Aclaración: Los números decimales se marcan con punto: Ejemplo:"1.2"*</p>

            <div className='Act1' style={{ margin: '10px 10px 30px 10px' }}>
                <p style={{ fontSize: 20, marginBottom: '10px' }}>Actividad 1:</p>
                {mostrarA && (
                    <>
                        <div style={{ marginBottom: '10px' }}>A) <img src="../../public/img/funcion1.png" alt="" /></div>
                        <p style={{ fontSize: 17 }}> Indica el dominio de la función =
                            <div className="" style={{ marginTop: '10px' }}>
                                {mostrarInputsA && (
                                    <>
                                        <input
                                            type="text"
                                            onChange={(e) => handleParte1Change(e.target.value)}
                                            placeholder="(-x.x)"
                                            maxLength="4"
                                            style={{ width: '70px', padding: '3px', backgroundColor: '#D9DDDE', borderRadius: '5px', border: 'solid, black, 2px' }}
                                        />
                                        <span style={{ fontSize: 20, margin: '0px 5px 9px 5px' }}>U</span>
                                        <input
                                            type="text"
                                            onChange={(e) => handleParte2Change(e.target.value)}
                                            placeholder="(-x.x)"
                                            maxLength="4"
                                            style={{ width: '70px', padding: '3px', backgroundColor: '#D9DDDE', borderRadius: '5px', border: 'solid, black, 2px' }}
                                        />
                                        <button onClick={handleSubmit} style={{
                                            backgroundColor: '#AABFC6',
                                            color: '#000',
                                            marginLeft: '10px',
                                            padding: '5px',
                                            border: 'solid, black, 2px',
                                            borderRadius: '5px',
                                        }}>Responder</button>
                                    </>
                                )}
                            </div>
                        </p>
                    </>
                )}

                {mostrarResultadoA && envio && (
                    <div>
                        <p style={{ color: validar === 'Correcto' ? 'green' : 'red', fontSize: 18 }}>
                            Dominio: ( {envio} ) es {validar}
                        </p>
                        <p>{validar === 'Correcto' ? imgRes[1] : imgRes[0]}</p>
                    </div>
                )}

                {!mostrarB && envio && (
                    <button onClick={handleNext} style={{
                        backgroundColor: '#AABFC6',
                        color: '#000',
                        marginTop: '10px',
                        padding: '5px',
                        border: 'solid, black, 2px',
                        borderRadius: '5px',
                    }}>Siguiente punto</button>
                )}

                {/* Sección B */}
                {mostrarB && (
                    <div style={{ marginTop: '30px' }}>
                        <p style={{ fontSize: 20, marginBottom: '10px' }}>B) <img src="../../public/img/funcion2.png" alt="" />Indica el dominio de la función = 
                            <div className="" style={{ marginTop: '10px' }}>
                                {mostrarInputsB && (
                                    <>
                                        <input
                                            type="text"
                                            onChange={(e) => handleParte1BChange(e.target.value)}
                                            placeholder="(-x.x)"
                                            maxLength="8"
                                            style={{ width: '70px', padding: '3px', backgroundColor: '#D9DDDE', borderRadius: '5px', border: 'solid, black, 2px' }}
                                        />
                                        <span style={{ fontSize: 20, margin: '0px 5px 9px 5px' }}>;</span>
                                        <input
                                            type="text"
                                            onChange={(e) => handleParte2BChange(e.target.value)}
                                            placeholder="(-x.x)"
                                            maxLength="8"
                                            style={{ width: '70px', padding: '3px', backgroundColor: '#D9DDDE', borderRadius: '5px', border: 'solid, black, 2px' }}
                                        />
                                        <button onClick={handleSubmitB} style={{
                                            backgroundColor: '#AABFC6',
                                            color: '#000',
                                            marginLeft: '10px',
                                            padding: '5px',
                                            border: 'solid, black, 2px',
                                            borderRadius: '5px',
                                        }}>Responder</button>
                                    </>
                                )}
                            </div>
                        </p>

                        {mostrarResultadoB && envioB && (
                            <div>
                                <p style={{ color: validarB === 'Correcto' ? 'green' : 'red', fontSize: 18 }}>
                                    Dominio: ( {envioB} ) es {validarB}
                                </p>
                                <p>{validarB === 'Correcto' ? imgRes[1] : imgRes[0]}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
