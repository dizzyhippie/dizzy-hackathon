import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Games from "./pages/Games";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
