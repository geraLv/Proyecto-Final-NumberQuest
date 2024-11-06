import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const NotFoundPages = lazy(() => import("../pages/NotFound"));
export const Activities = lazy(() => import("../pages/activities"));
export const LoginForm = lazy(() => import("../pages/loginForm"));
export const RegisterForm = lazy(() => import("../pages/registerForm"));
export const ListaTemas = lazy(() => import("../pages/listaTemas"));
