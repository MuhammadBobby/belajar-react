import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPages from "./pages/login";
import RegisterPages from "./pages/register";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world</div>,
//   },
//   {
//     path: "/login",
//     element: <LoginPages />,
//   },
//   {
//     path: "/register",
//     element: <RegisterPages />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
