import { connection } from "../db/database.js";
import generarJWT from "../helpers/generar-jwt.js"

export const login = async (req, res) => {
    console.log('hola');
        const { username, password } = req.body;
    try {
        const newConnection = await connection()
        const [[user]] = await newConnection.query("SELECT * FROM users WHERE username = ? AND password = ?",[username, password])
        if (user) {
            // Guardar información del usuario en la sesión
            req.session.userId = user.id;
            req.session.username = user.username;
        } else {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        const token = await generarJWT(user.id)
        req.session.token = token
        res.cookie("authToken",token,{
            httpOnly:true,
            secure:false,
            maxAge:36000000,
        })
        res.json({ 
                message: 'Inicio de sesión exitoso', 
                user: { id: user.id, username: user.username } });
    }catch(error){
        console.log(error);
    }
}

export const register = async(req, res) =>{
    const {username, password}=req.body;
    try {
        const newConnection = await connection();
        const[resultado]= await newConnection.query("INSERT INTO users(username,password) VALUES(?,?)",[username,password]);
        res.status(201).json({
            msg:"Usuario creado exitosamente"
        });
    } catch (error) {
        console.error("Ocurrio un error al crear un usuario")
    }
}



export const session = async (req, res) => {
        if (req.session.userId) {
            return res.json({ 
                loggedIn: true, 
                user: { id: req.session.userId, username: req.session.username } });
        } else {
            return res.status(401).json({ loggedIn: false, message: 'No hay sesión activa' });
        }
    };


export const cerrarSesion = async (req, res) => {
        console.log(req.session)
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ message: 'Error al cerrar la sesión' });
            }
            res.clearCookie('connect.sid'); // Nombre de cookie por defecto para express-session
            return res.json({ message: 'Sesión cerrada exitosamente' });
        });
    }