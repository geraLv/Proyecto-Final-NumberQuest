import React from "react";
import Navbar from "../components/navbar";
// import Layaut from "../components/layaut";
import Footer from "../components/footer";
import BotonPantallaCompleta from "../components/botonBiblio";
// import Temas from "../components/temas";


const BibliografiaLista = () => {
    const manejarClick = (texto) => {
        if (texto === "Funciones"){
            window.location.href = "https://drive.google.com/file/d/1aRFf-XsQHofzmkdkFkvza94hAcyYoaZk/view"
        }
        if (texto === "Limites"){
            window.location.href = "https://drive.google.com/file/d/1rViBP0UDJrA8wJfEK8kdZqo7s4ZEwg_Q/view"
        }
        if (texto === "Derivadas"){
            window.location.href = "https://drive.google.com/file/d/1GTyNm2cPEgQgTRtBNL23HNTZoBsANOYn/view"
        }
        if (texto === "Maximos, Minimos y Puntos de Inflexion"){
            window.location.href = "https://drive.google.com/file/d/1yuA7LL_gMMqrcCwBAoKTgZmnb2sj0A5x/view"
        }
        if (texto === "Integrales"){
            window.location.href = "https://www.ofimega.es/Manuales/BAT/Integrales.pdf"
        }
        if (texto === "Calculo de Area"){
            window.location.href = "https://matesup.cl/cursos/tecmed2/contenidos/integral-definida/s14-calculo-areas.pdf"
        }
        if (texto === "Derivada por Sustitucion"){
            window.location.href = "https://multiblog.educacion.navarra.es/jamorena/files/2015/03/Integraci%C3%B3n-por-sustituci%C3%B3n.pdf"
        }
    };

    return (
    <div className="space-y-4">
        <Navbar></Navbar>
        <BotonPantallaCompleta texto="Funciones" onClick={() => manejarClick("Funciones")} />
        <BotonPantallaCompleta texto="Limites" onClick={() => manejarClick("Limites")} />
        <BotonPantallaCompleta texto="Derivadas" onClick={() => manejarClick("Derivadas")} />
        <BotonPantallaCompleta texto="Maximos, Minimos y Puntos de Inflexion" onClick={() => manejarClick("Maximos, Minimos y Puntos de Inflexion")} />
        <BotonPantallaCompleta texto="Integrales" onClick={() => manejarClick("Integrales")} />
        <BotonPantallaCompleta texto="Calculo de Area" onClick={() => manejarClick("Calculo de Area")} />
        <BotonPantallaCompleta texto="Derivada por Sustitucion" onClick={() => manejarClick("Derivada por Sustitucion")} />
        <Footer></Footer>
    </div>
    );
};

export default BibliografiaLista;