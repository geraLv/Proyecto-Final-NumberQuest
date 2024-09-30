import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/index.css";
import AppRouter from "./routes/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
