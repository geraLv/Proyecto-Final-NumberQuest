// import React, { useEffect, useState } from "react";
import { MathJaxContext } from "better-react-mathjax";
import AppRouter from "./routes/AppRouter";
import "./styles/index.css";
// import { UserContexto } from "./context/UserContext";

function App() {
  return (
    <MathJaxContext>
      <AppRouter />;
    </MathJaxContext>
  );
}

export default App;
