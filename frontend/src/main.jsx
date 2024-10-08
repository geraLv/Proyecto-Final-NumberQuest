import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { AppRouter } from "./AppRouter.jsx";
import App from "./App.jsx";
// import LoginForm from "./components/loginForm.jsx";
// import RegisterForm from "./components/registerForm.jsx";
import "./index.css";
// import { Activities } from "./components/activities.jsx";

// import ListaTemas from "./lista-temas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
