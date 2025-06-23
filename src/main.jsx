import SignIn from "./routes/SignIn";
import App from "./App";
import ExamplePage from "./routes/ExamplePage";
import ExamplePage2 from "./routes/ExamplePage2";

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
        path: "example",
        element: <ExamplePage />,
      },
      {
        path: "example2",
        element: <ExamplePage2 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
