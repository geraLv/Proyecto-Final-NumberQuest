import { connection } from "../db/database.js";

export const apiUsers = async (req, res) => {
  const newConnection = await connection();
  const [users] = await newConnection.query("SELECT * FROM users");
  res.send({ users });
};

export const apiUser = async (req, res) => {
  const currentPath = window.location.pathname;
  const idFromPath = currentPath.split("/").pop();
  console.log(idFromPath);
  // const {idEncontrada} = parseInt(idFromPath);
  const newConnection = await connection();
  const [users] = await newConnection.query("SELECT * FROM users");
  const user = {
    users: {
      id: users.id + 1,
      username: users.username,
      email: "",
      password: "",
    },
  };
  res.send({ user });
};
