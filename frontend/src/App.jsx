import React from "react";
import AppRouter from "./routes/AppRouter.jsx";
import NavBar from  "./components/navbar.jsx";
import Layaut from  "./components/layaut.jsx";
import Footer from   "./components/footer.jsx";


import "./index.css";

function App() {
  return (
    <>
    <NavBar></NavBar>,
    <Layaut>

    </Layaut>
    <Footer></Footer>
    </>
   
  );
}
 {/* // <AppRouter/> */}
export default App;
