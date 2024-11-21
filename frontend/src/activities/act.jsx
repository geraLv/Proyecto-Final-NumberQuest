import { Button, input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
import ActivitiesStatus from "../hooks/ActivitiesStatus";
import imgcoso from "../public/img/funcion1.png";
import guia1 from "../public/img/guia1.png";
// import { Surrender } from "../hooks/allHooks";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Teclado from "../hooks/teclado";
// import { MathJax } from "better-react-mathjax";
export const Actividad = () => {
  const [parte1, setParte1] = useState("");
  const [validar, setValidar] = useState(false);
  const [parte2, setParte2] = useState("");
  const [parte1B, setParte1B] = useState("");
  const [parte2B, setParte2B] = useState("");
  const [envio, setEnvio] = useState("");
  const [envioB, setEnvioB] = useState("");
  const [mostrarInputsA, setMostrarInputsA] = useState(true);
  const [mostrarResultadoA, setMostrarResultadoA] = useState(false);
  const [mostrarInputsB, setMostrarInputsB] = useState(false);
  const [mostrarResultadoB, setMostrarResultadoB] = useState(false);
  const [mostrarB, setMostrarB] = useState(false);
  const [mostrarA, setMostrarA] = useState(true);
  const [openHelp, setOpenHelp] = useState(false);
  const [tecladoOk, setTecladoOk] = useState(false);
  const [tecladoOk2, setTecladoOk2] = useState(false);

  const [valorTeclado, setValorTeclado] = useState("");
  const [valorTeclado2, setValorTeclado2] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const write = (value) => {
    setValorTeclado((prev) => prev + value);
  };

  const write2 = (value) => {
    setValorTeclado2((prev) => prev + value);
  };

  // useEffect(() => {
  //   return () => {
  //     second;
  //   };
  // }, [third]);

  const answers = ["-4 ; 4", "(-inf,0) U (1/4,+inf)"];
  const imgRes = [
    <img
      style={{ width: 560, height: 292 }}
      src="https://th.bing.com/th/id/OIP.k6H2Q8P1DKlgmf4tMLFwvgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3"
      alt=""
    />,
    <img
      src="https://media.licdn.com/dms/image/C5112AQEYARonHijMaQ/article-cover_image-shrink_600_2000/0/1549770046623?e=2147483647&v=beta&t=9B-KDNvL_mfs2VrOXKrsHf8T5NMG2MXAKCi5i89cXeE"
      alt=""
    />,
    <img src={guia1} className="w-2/4 h-1/5"></img>,
  ];

  useEffect(() => {
    valorTeclado === "" ? setTecladoOk(false) : setTecladoOk(true);
    valorTeclado2 === "" ? setTecladoOk2(false) : setTecladoOk2(true);

    tecladoOk ? setParte1(parseInt(valorTeclado)) : null;

    tecladoOk2 ? setParte2(parseInt(valorTeclado2)) : null;
  }, [tecladoOk, tecladoOk2, valorTeclado, valorTeclado2]);

  const handleParte1BChange = (input) => {
    // Regex para validar -inf, +inf, números, fracciones y listas sin necesidad de paréntesis
    if (
      /^(-inf|\+inf|\d+\/\d+|-?\d*[,\.]?\d*)(,\s*(-inf|\+inf|\d+\/\d+|-?\d*[,\.]?\d*))*$/.test(
        input
      )
    ) {
      setParte1B(input);
    }
  };

  const handleParte2BChange = (input) => {
    // Regex para validar -inf, +inf, números, fracciones y listas sin necesidad de paréntesis
    if (
      /^(-inf|\+inf|\d+\/\d+|-?\d*[,\.]?\d*)(,\s*(-inf|\+inf|\d+\/\d+|-?\d*[,\.]?\d*))*$/.test(
        input
      )
    ) {
      setParte2B(input);
    }
  };

  // onClick = {handleSubmit}?():
  const handleSubmit = () => {
    console.log("parte 1", parte1);
    console.log("parte 2", parte2);
    if (/^-?\d*[,\.]?\d*$/.test(parte1)) {
      // handleSubmit?:();
    }
    if (/^-?\d*[,\.]?\d*$/.test(parte2)) {
    }
    if ((parte1 === "" || parte2 === "", isNaN(parte1) || isNaN(parte2)))
      alert("Error: Debe ingresar un número válido");
    else {
      const respuesta = `${parte1} ; ${parte2}`;
      setEnvio(respuesta);
      cerreccion(respuesta);
      setMostrarResultadoA(true);
      setMostrarInputsA(false);
      console.log("respuesta", respuesta);
    }
  };
  const alertaBoton = () => {
    Swal.fire({
      title: "Para acceder deve registrarse o iniciar sesión",
      icon: "warning",
      confirmButtonText: "Continuar",
    });
  };
  const handleSubmitB = () => {
    if (
      parte1B === "" ||
      parte2B === "" ||
      !/^(-inf|\+inf|\d+\/\d+|-?\d*[,\.]?\d*)(,\s*(-inf|\+inf|\d+\/\d+|-?\d*[,\.]?\d*))*$/.test(
        parte1B
      ) ||
      !/^(-inf|\+inf|\d+\/\d+|-?\d*[,\.]?\d*)(,\s*(-inf|\+inf|\d+\/\d+|-?\d*[,\.]?\d*))*$/.test(
        parte2B
      )
    ) {
      alert(
        "Error: Debe ingresar un valor válido (por ejemplo: -inf, +inf, o fracciones como 1/4)."
      );
    } else {
      const respuestaB = `(${parte1B}) U (${parte2B})`;
      setEnvioB(respuestaB);
      setMostrarResultadoB(true);
      setMostrarInputsB(false);
    }
  };

  const cerreccion = (respuesta) => {
    respuesta === answers[0] ? setValidar(true) : setValidar(false);
  };
  validar === true ? ActivitiesStatus(validar) : ActivitiesStatus(false);
  // envio === answers[0] ? setValidar(true) : setValidar(false);

  // const validarB = envioB === answers[1] ? true : false;

  const handleNext = () => {
    setMostrarB(true);
    setMostrarResultadoA(false);
    setMostrarA(false);
    setMostrarResultadoB(true); // Oculta el resultado de B
    setMostrarInputsB(true); // Muestra los inputs de B
  };

  return (
    <div className="main">
      <h1 className="text-3xl">
        <b>Dominio de funciones</b>
      </h1>
      <div className="bg-gray-200 rounded m-2 p-2 border-blue-gray-300 border-2 w-screen container text-black text-xl">
        <h1 className="text-black text-2xl">
          Como ejemplo usaremos la siguiente función:
        </h1>
        <br />
        √(5+y) ​ + √(7−y) ​ +3⋅ √(3) ​
        <br />
        <br />
        <h1 className="text-black text-2xl">
          Paso 1: Encontrar las restricciones para cada raíz cuadrada
        </h1>{" "}
        <br />
        1_Para la raíz √(5+𝑦) ​ , la expresión dentro de la raíz es 5+𝑦 debe ser
        mayor o igual a 0:
        <br />
        <br />
        <div className="flex">
          <h1 className="text-black text-2xl">5 + 𝑦 ≥ 0 </h1>
          <h1 className="text-light-blue-900 text-2xl">{"=>"}</h1>{" "}
          <h1 className="text-black text-2xl">𝑦 ≥ − 5</h1>
        </div>
        <br /> Para la raíz √(7 − 𝑦) ​ , la expresión dentro de la raíz es √(7 −
        𝑦) debe ser mayor o igual a 0:
        <br />
        <br />
        <div className="flex">
          <h1 className="text-black text-2xl">7 − 𝑦 ≥ 0</h1>
          <h1 className="text-light-blue-900 text-2xl">{"=>"}</h1>{" "}
          <h1 className="text-black text-2xl">𝑦 ≤ 7</h1>
        </div>
        <br />
        La expresión 3 ⋅ √3​ es constante y no afecta el dominio.
        <br />
        <br />
        <h1 className="text-black text-2xl">Paso 2: Determinar el dominio</h1>
        <br />
        Ahora, juntamos ambas restricciones:
        <br />
        <br />
        <h1 className="text-black text-2xl">*𝑦 ≥ − 5</h1>
        <br />
        <h1 className="text-black text-2xl">*𝑦 ≤ 7</h1>
        <br />
        El dominio de la función será la intersección de ambos conjuntos, es
        decir: 𝑦 ∈ [ − 5 , 7 ]
        <br />
        Respuesta final: <br />
        <br />
        El dominio de la función es: 𝑦 ∈ [ − 5 , 7 ] y ∈ [−5,7] <br />
        Es decir, los valores de 𝑦 y deben estar entre − 5 y 7.
      </div>

      <div className="Act1" style={{ margin: "10px 10px 30px 10px" }}>
        <p style={{ fontSize: 20, marginBottom: "10px" }}>Actividad 1:</p>
        {mostrarA && (
          <>
            <div className="py-2" style={{ marginBottom: "10px" }}>
              A)
              <img className="h-8" src={imgcoso} alt="" />
            </div>
            <div style={{ fontSize: 17 }}>
              {" "}
              Indica el dominio de la función =
              <div className="" style={{ marginTop: "10px" }}>
                {openHelp ? (
                  <div className="container border-2 border-blue-gray-400 rounded p-3 my-3 bg-gray-200">
                    <h1 className="text-2xl text-blue-800">Resolucion:</h1>
                    <br />
                    <h1 className="text-xl">
                      El dominio de la función f ( x ) = √(4 + x) + √(4 − x) + 2
                      √(2) f(x)= √(4+x) ​ + √(4−x) ​ +2√(2) ​ está determinado
                      por las restricciones de los radicandos.
                    </h1>
                    <br />
                    <br />
                    <h1>
                      Necesitamos que ambos sean mayores o iguales a cero:
                    </h1>
                    <br />
                    <div className="flex">
                      <h1 className="text-black text-2xl">4 + x ≥ 0 </h1>
                      <h1 className="text-light-blue-900 text-2xl">
                        {"=>"}
                      </h1>{" "}
                      <h1 className="text-black text-2xl">x ≥ -4</h1>
                    </div>
                    <br />
                    <div className="flex">
                      <h1 className="text-black text-2xl">4 - x ≥ 0</h1>
                      <h1 className="text-light-blue-900 text-2xl">
                        {"=>"}
                      </h1>{" "}
                      <h1 className="text-black text-2xl">x ≤ 4</h1>
                    </div>
                    <br />
                    <h1 className="flex">
                      Combinando ambas restricciones, el dominio de la función
                      es <h1 className="text-black">-4 ≤ x ≤ 4 </h1>, o en
                      notación de intervalos, [-4, 4].
                    </h1>
                  </div>
                ) : (
                  ""
                )}
                <p style={{ color: "#AABFC6", marginTop: "10px" }}>
                  *Aclaración: Los números decimales se marcan con punto:
                  Ejemplo:"1.2"*
                </p>
                {mostrarInputsA && (
                  <>
                    <input
                      // Utiliza el estado local para el valor del teclado
                      type="text"
                      value={valorTeclado}
                      onChange={(e) => setValorTeclado(e.target.value)}
                      onFocus={(e) => e.target.select(setInputFocus(false))}
                      placeholder="(-x.x)"
                      maxLength="4"
                      style={{
                        width: "70px",
                        padding: "3px",
                        backgroundColor: "#D9DDDE",
                        borderRadius: "5px",
                        border: "solid, black, 2px",
                      }}
                    />
                    <span style={{ fontSize: 20, margin: "0px 5px 9px 5px" }}>
                      ;
                    </span>
                    <input
                      type="text"
                      value={valorTeclado2}
                      onFocus={(e) => e.target.select(setInputFocus(true))}
                      onChange={(e) => setValorTeclado2(e.target.value)}
                      placeholder="(-x.x)"
                      maxLength="4"
                      style={{
                        width: "70px",
                        padding: "3px",
                        backgroundColor: "#D9DDDE",
                        borderRadius: "5px",
                        border: "solid, black, 2px",
                      }}
                    />
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      style={{
                        backgroundColor: "#AABFC6",
                        color: "#000",
                        marginLeft: "10px",
                        padding: "5px",
                        border: "solid, black, 2px",
                        borderRadius: "5px",
                      }}
                    >
                      Responder
                    </button>
                    <button
                      // type="submit"
                      onClick={() => setOpenHelp(!openHelp)}
                      style={{
                        backgroundColor: "#AABFC6",
                        color: "#000",
                        marginLeft: "10px",
                        padding: "5px",
                        border: "solid, black, 2px",
                        borderRadius: "5px",
                      }}
                    >
                      Ayuda
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        {mostrarResultadoA && envio && (
          <div>
            <p
              style={{
                color: validar === true ? "green" : "red",
                fontSize: 24,
              }}
            >
              Dominio: ( {envio} ) es {validar === true ? "verdadero" : "falso"}
            </p>
            {/* <p>{validar === true ? imgRes[1] : imgRes[0]}</p> */}
          </div>
        )}

        {!mostrarB && envio && (
          <button
            onClick={handleNext}
            style={{
              backgroundColor: "#AABFC6",
              color: "#000",
              marginTop: "10px",
              padding: "5px",
              border: "solid, black, 2px",
              borderRadius: "5px",
            }}
          >
            Siguiente punto
          </button>
        )}

        {/* Sección B */}
        {mostrarB && (
          <div style={{ marginTop: "30px" }}>
            <p style={{ fontSize: 20, marginBottom: "10px" }}>
              B) <img src="../../img/funcion2.png" alt="" />
              Indica el dominio de la función =
              <div className="" style={{ marginTop: "10px" }}>
                {mostrarInputsB && (
                  <>
                    <input
                      type="text"
                      onChange={(e) => handleParte1BChange(e.target.value)}
                      placeholder="-inf,0"
                      maxLength="20"
                      style={{
                        width: "150px",
                        padding: "3px",
                        backgroundColor: "#D9DDDE",
                        borderRadius: "5px",
                        border: "solid, black, 2px",
                      }}
                    />
                    <span style={{ fontSize: 20, margin: "0px 5px 9px 5px" }}>
                      U
                    </span>
                    <input
                      type="text"
                      onChange={(e) => handleParte2BChange(e.target.value)}
                      placeholder="1/4,+inf"
                      maxLength="20"
                      style={{
                        width: "150px",
                        padding: "3px",
                        backgroundColor: "#D9DDDE",
                        borderRadius: "5px",
                        border: "solid, black, 2px",
                      }}
                    />
                    <button
                      onClick={handleSubmitB}
                      style={{
                        backgroundColor: "#AABFC6",
                        color: "#000",
                        marginLeft: "10px",
                        padding: "5px",
                        border: "solid, black, 2px",
                        borderRadius: "5px",
                      }}
                    >
                      Responder
                    </button>
                  </>
                )}
              </div>
            </p>

            {mostrarResultadoB && envioB && (
              <div>
                <p
                  style={{
                    color: validarB === "Correcto" ? "green" : "red",
                    fontSize: 18,
                  }}
                >
                  Dominio: {envioB} es {validarB}
                </p>
                <p>{validarB === "Correcto" ? imgRes[1] : imgRes[0]}</p>
                <button
                  style={{
                    backgroundColor: "#AABFC6",
                    color: "#000",
                    marginLeft: "10px",
                    padding: "5px",
                    border: "solid, black, 2px",
                    borderRadius: "5px",
                    marginTop: "5px",
                  }}
                >
                  {" "}
                  Salir{" "}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <button onClick={<Navigate to="/actividad/2" />}>
        <Link
          to="/actividad/2"
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
        >
          Siguiente Actividad
        </Link>
      </button>
      <div className="my-4 flex bg-blue-gray-100 rounded-xl flex-row w-full">
        <div className=" grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
          {[
            "x",
            "y",
            "z",
            "π",
            "^2",
            "^n",
            "√",
            "e",
            "<",
            ">",
            "a/b",
            "(",
            ")",
            "|.|",
            ",",
            "=",
          ].map((item) => (
            <button
              key={item}
              onClick={inputFocus ? () => write2(item) : () => write(item)}
              className="flex m-1 p-1 shadow-lg justify-center text-xl rounded items-center bg-white hover:scale-105 duration-100 ease-in"
            >
              {item}
            </button>
          ))}
        </div>
        <div className=" grid grid-cols-4 grid-rows-4 w-full h-full m-4 ">
          {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "/", 0, ".", "="].map(
            (item) => (
              <button
                key={item}
                onClick={inputFocus ? () => write2(item) : () => write(item)}
                className="flex shadow-lg justify-center m-1 p-1 rounded text-xl items-center bg-white hover:scale-105 duration-100 ease-in"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
