import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Game } from "../pages/Game";
import { Ranking } from "../pages/Ranking";
import { Layout } from "../components/Layout";
import { Error } from "../pages/Error";
import { Login } from "../pages/Login";
import { useAuth } from "../hooks/useAuth";
import { Pokedex } from "../pages/Pokedex";

// Crie o roteamento
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // O Layout agora está sempre presente
    errorElement: <Error />,
    children: [
      {
        index: true,  // Define a rota padrão para o login
        element: <Navigate to="/login" replace />,  // Redireciona para o login na raiz
      },
      {
        path: "/login",
        element: <Login />,  // Página de login
      },
      {
        path: "/game",
        element: <Game />,  // Página do jogo
      },
      {
        path: "/pokedex",
        element: <Pokedex />,  // Página da pokédex
      },
      {
        path: "/ranking",
        element: (
          <RequiredAuth>
            <Ranking />  // Página protegida de ranking
          </RequiredAuth>
        ),
      },
    ],
  },
]);

// Verificação de autenticação
function RequiredAuth({ children }) {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// Provedor de Rotas
export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
