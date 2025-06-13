import SignIn from "./routes/SignIn";
import App from "./App";
import ExamplePage from "./routes/ExamplePage";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "example",
        element: <ExamplePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
