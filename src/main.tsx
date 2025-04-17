import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage"; // load immediately
import NotFoundPage from "./pages/NotFoundPage";
import LunchBoxOpen from "./components/Game/GameStartAnimation";
import GameEnd from "./components/Game/GameEnd";

const ReadPage = lazy(() => import("./pages/ReadPage"));
const GamePage = lazy(() => import("./pages/GamePage"));
const StoryEndPage = lazy(() => import("./pages/StoryEndPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/read/:pageNumber",
    element: (
      <Suspense fallback={<div>Loading page...</div>}>
        <ReadPage />
      </Suspense>
    ),
  },
  {
    path: "/read/end",
    element: (
      <Suspense fallback={<div>Loading ending...</div>}>
        <StoryEndPage />
      </Suspense>
    ),
  },
  {
    path: "/game/start",
    element: (
      <Suspense fallback={<div>Loading game...</div>}>
        <LunchBoxOpen />
      </Suspense>
    ),
  },
  {
    path: "/game",
    element: (
      <Suspense fallback={<div>Loading game...</div>}>
        <GamePage />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
