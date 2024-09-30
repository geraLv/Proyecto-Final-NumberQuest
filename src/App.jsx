import Bloques from "./components/bloques";
import { MenuDefault } from "./components/button";
import { CarouselDefault } from "./components/carusel";
import Footer from "./components/footer";
import Layaut from "./components/layaut";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar>
        <MenuDefault></MenuDefault>
      </NavBar>
      <CarouselDefault></CarouselDefault>
      <Layaut>
        <Bloques></Bloques>
      </Layaut>
      <Footer></Footer>
    </>
  );
}

export default App;
