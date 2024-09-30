import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { AppRouter } from "./AppRouter.jsx";
import App from "./App.jsx";
// import LoginForm from "./components/loginForm.jsx";
// import RegisterForm from "./components/registerForm.jsx";
import "./index.css";
import ListaTemas from "./lista-temas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD:src/main.jsx
    {/* <App /> */}
    <ListaTemas></ListaTemas>
=======
    <App/>
>>>>>>> 025e614da9c8f49af148a89843b76d09b7770b0d:frontend/src/main.jsx
  </StrictMode>
);
