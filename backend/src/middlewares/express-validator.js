import { validationResult } from "express-validator";
import { body } from "express-validator";

export const aplicarValidaciones = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json(errores);
  }
  next();
};

export const validaciones = [
  body("email")
    .notEmpty()
    .withMessage("Email es obligatorio")
    .isEmail()
    .withMessage("Email inválido"),
  body("password")
    .notEmpty()
    .withMessage("Contraseña es obligatoria")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
];
