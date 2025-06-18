import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../contexts/DefaultLayout";
import Inicio from "../pages/Inicio";
import Sobre from "../pages/Sobre/Sobre";
import Login from "../pages/Login/Login";
import Configuracoes from "../pages/Configuracoes/Configuracoes";
import Perfil from "../pages/Perfil/Perfil";
import Home from "../pages/HomePage/HomePage";
import Feed from "../pages/Feed/Feed";
import Ranking from "../pages/Ranking/Ranking";
import Planos from "../pages/Planos/Planos";
import Notificacoes from "../pages/Notificacao/Notificacoes" 
import Galeria from "../pages/Galeria/Galeria"
import ArtesSalvas from  "../pages/Galeria/ArtesSalvas"
// Importando as páginas necessárias para as rotas

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/login", element: <Login /> },
      { path: "/configuracoes", element: <Configuracoes /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/home", element: <Home />},
      { path: "/feed", element: <Feed />},
      { path: "/ranking", element: <Ranking />},
      { path: "/planos", element: <Planos />},
      { path: "/notificacoes", element: <Notificacoes />},
      { path: "/galeria", element: <Galeria />},
      { path: "/artes-salvas", element: <ArtesSalvas />},
    ]
  }
]);
