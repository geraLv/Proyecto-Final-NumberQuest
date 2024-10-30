import { useContext } from "react";
import { UserContexto } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  user = useContext(UserContexto);
  console.log("Private:", user);
  return user.loggedIn ? <h1>hola</h1> : <Navigate to={"/login"} />;
};
