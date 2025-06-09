import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../contexts/DefaultLayout";
import Inicio from "../pages/Inicio";
import Sobre from "../pages/Sobre/Sobre";
import Login from "../pages/Login/Login";
import Configuracoes from "../pages/Configuracoes/Configuracoes";
import Perfil from "../pages/Perfil/Perfil";
import Home from "../pages/HomePage/HomePage";
// Importando as páginas necessárias para as rotas

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />, // layout com ScrollToTop
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/login", element: <Login /> },
      { path: "/configuracoes", element: <Configuracoes /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/home", element: <Home />}
    ]
  }
]);
