import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Characters from "./Components/Characters";
import CharacterDetails from "./Components/CharacterDetails";
import NotFound from "./Components/NotFound";

export default function MyRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "characters", element: <Characters /> },
        { path: "characters/:id", element: <CharacterDetails /> },
        {path: "*", element: <NotFound />},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
