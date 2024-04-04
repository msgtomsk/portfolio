import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import AboutMe from "./components/about-me/AboutMe";
import ErrorPage from "./components/error-page/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio/about",
    element: <AboutMe/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
