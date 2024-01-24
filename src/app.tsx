import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import '../styles.css';
import HomeController from "./pages/Home/Home.controller";
import { HomeVM } from "./pages/Home/Home.vm";



const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(HomeController, { vm: new HomeVM() }),
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  )
}

