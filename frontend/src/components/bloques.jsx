import React from "react";

const Bloques = () => {
  return (
    <div>
      <section classNameName=" text-gray-400 body-font flex justify-center">
        <div className=" py-6 bg-home conteiner mx-1/2">
          <div className="flex flex-col -m-4">
            <a href="./temas/2">
              <div className="flex xl:w-full px-4 py-4 w-full">
                <div className="container bg-caja flex flex-row justify-around gap-4  bg-opacity-90 p-6 rounded-lg">
                  <img
                    className="h-full rounded w-1/3 object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <div className="bg-text space-y-4 w-full rounded-xl p-4">
                    <h1 className="tracking-widest text-gray-200 text-darck text-xl font-medium title-font">
                      Teoría de conjuntos
                    </h1>
                    <p className="leading-relaxed text-gray-200 text-base">
                      La teoría de conjuntos es una rama fundamental de la
                      matemática que estudia colecciones de objetos llamados
                      elementos. Un conjunto se representa entre llaves, como
                      por ejemplo A igual a uno, dos, tres. Algunos conceptos
                      clave incluyen el conjunto vacío, que no contiene
                      elementos, subconjuntos, unión de conjuntos, intersección
                      de conjuntos y la diferencia entre conjuntos. Esta teoría
                      proporciona el lenguaje y las herramientas necesarias para
                      estudiar diversas áreas de las matemáticas.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="./temas/5">
              <div className="flex xl:w-full px-4 py-4 w-full">
                <div className="container bg-caja flex flex-row justify-around gap-4  bg-opacity-90 p-6 rounded-lg">
                  <img
                    className="h-full rounded w-1/3 object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <div className="bg-text w-full rounded-xl space-y-4 p-4">
                    <h1 className="tracking-widest text-gray-200 text-xl font-medium title-font">
                      Limites
                    </h1>
                    <p className="leading-relaxed text-base text-gray-200">
                      El límite es un concepto central en cálculo que describe
                      el valor al que se aproxima una función f de x cuando x se
                      acerca a un número a. Se dice que el límite de f de x
                      cuando x tiende a a es L si al acercarse a a, el valor de
                      f de x se aproxima a L. Los límites son esenciales para
                      definir la continuidad, las derivadas y el comportamiento
                      de funciones en puntos críticos o discontinuidades.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="./temas/6">
              <div className="flex xl:w-full px-4 py-4 w-full">
                <div className="container bg-caja  flex flex-row justify-around gap-4  bg-opacity-90 p-6 rounded-lg">
                  <img
                    className="h-full rounded w-1/3 object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <div className="bg-text w-full rounded-xl space-y-4 p-4">
                    <h1 className="text-gray-200 tracking-widest  text-xl font-medium title-font">
                      Derivadas
                    </h1>
                    <p className="leading-relaxed text-base text-gray-200">
                      La derivada es un concepto clave en cálculo que mide el
                      cambio de una función f de x respecto a su variable
                      independiente. Se define como el límite del cociente del
                      cambio de la función cuando se acerca a un punto
                      específico. Esto representa la pendiente de la tangente a
                      la gráfica en ese punto. Las derivadas tienen múltiples
                      aplicaciones, como tasas de cambio, optimización y el
                      análisis de continuidad y diferenciabilidad en funciones.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bloques;
