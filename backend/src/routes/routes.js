import { Router } from "express";

// Controladores
import {
  login,
  session,
  cerrarSesion,
  register,
} from "../controller/controllers.js";

// Middlewares
import {
  aplicarValidaciones,
  validaciones,
} from "../middlewares/express-validator.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { apiUsers, apiUser } from "../models/api.js";

// Rutas
export const userRoutes = Router();

userRoutes.get("/session", validarJWT, session);
userRoutes.get("/api/users", apiUsers);
userRoutes.get("/api/user/*", apiUser);
userRoutes.post("/login", login);
userRoutes.post("/logout", cerrarSesion);
userRoutes.post("/register", validaciones, aplicarValidaciones, register);
