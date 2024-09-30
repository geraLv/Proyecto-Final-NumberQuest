import Bloques from "./components/bloques";
import Carusel from "./components/carusel";
import Footer from "./components/footer";
import Layaut from "./components/layaut";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Layaut>
        <Carusel></Carusel>
        <Bloques></Bloques>
      </Layaut>
      <Footer></Footer>
    </>
  );
}

export default App;
