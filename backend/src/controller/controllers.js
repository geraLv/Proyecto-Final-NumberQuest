import { connection } from "../db/database.js";
import generarJwt from "../helpers/generar-jwt.js";

// Controladores

// Login
export const login = async (req, res) => {
  console.log("hola");
  const { email, password } = req.body;
  try {
    const newConnection = await connection();
    const [[user]] = await newConnection.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );
    if (user) {
      req.session.userId = user.id;
      req.session.email = user.email;
    } else {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }
    const token = await generarJwt(user.id);
    req.session.token = token;
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: false,
      maxAge: 36000000,
    });
    res.json({
      message: "Inicio de sesión exitoso",
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error inesperado" });
  }
};
export const register = async (req, res) => {
  const { username , email, password } = req.body;
  try {
    const newConnection = await connection();
    const [resultado] = await newConnection.query(
      "INSERT INTO users(username,email,password) VALUES(?,?,?)",
      [username, email, password]
    );

    // console.log(resultado.insertId);
    const [userAct] = await newConnection.query(
      "INSERT INTO activities_status(id_user) VALUES(?)",
      [resultado.insertId]
    );
    res.json({
      message: "Usuario creado exitosamente",
      id: resultado.insertId,
      // act: userAct
    });
  } catch (error) {
    console.error("Ocurrio un error al crear un usuario");
  }
};

//session
export const session = async (req, res) => {
  if (req.session.userId) {
    return res.json({
      loggedIn: true,
      user: { id: req.session.userId, email: req.session.email },
    });
  } else {
    return res
      .status(401)
      .json({ loggedIn: false, message: "No hay sesión activa" });
  }
};

//Activities Status
export const activitiesStatus = async (req, res) => {
  try {
    const { id_user, actState, idAct } = req.body;
    console.log("hola");
    console.log(id_user, actState, idAct);

    const newConnection = await connection();
    const [resultado] = await newConnection.query(
      `UPDATE activities_status SET ${idAct} = ? WHERE id_user = ${id_user}`,
      [actState]
    );
    res.json({ resultado, message: "Actividad actualizada exitosamente" });
  } catch (error) {
    console.log("Ocurrio un error al actualizar la actividad");
  }
};

//Activities is Completed
export const isCompleted = async (req, res) => {
  try {
    const newConnection = await connection();
    const [resultado] = await newConnection.query(
      `SELECT * FROM activities_status `
    );
    res.json({
      resultado: resultado.map(
        ({ act_1, act_2, act_3, act_4, act_5, act_6, act_7 }) => ({
          act_1,
          act_2,
          act_3,
          act_4,
          act_5,
          act_6,
          act_7,
        })
      ),
    });
  } catch (error) {
    console.log("Ocurrio un error al llamar las actividades del usuario");
  }
};

//logout
export const cerrarSesion = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error al cerrar la sesión" });
    }
    res.clearCookie("connect.sid"); // Nombre de cookie por defecto para express-session
    return res.json({ message: "Sesión cerrada exitosamente" });
  });
};
