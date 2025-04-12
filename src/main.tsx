import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ReadPage from "./pages/ReadPage";
import NotFoundPage from "./pages/NotFoundPage";
import GamePage from "./pages/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/read/:pageNumber",
    element: <ReadPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
