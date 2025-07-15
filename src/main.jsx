import SignIn from "./routes/SignIn";
import App from "./App";
import DashboardPage from "./routes/DashboardPage";
import CRMPage from "./routes/CRMPage";
import ConnectionsPage from "./routes/ConnectionsPage";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Variável responsável pelo roteamento de páginas da aplicação;
const router = createBrowserRouter([
  {
    path: "/login", //URL da página;
    element: <SignIn />, //Página a ser exibida;
  },
  {
    Component: App,
    path: "/",
    children: [
      //Páginas internas da aplicação (Páginas do menu lateral);
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "crm",
        element: <CRMPage />,
      },
      {
        path: "connections",
        element: <ConnectionsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
