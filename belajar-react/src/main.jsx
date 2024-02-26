import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPages from "./pages/login";
import RegisterPages from "./pages/register";
import ProductsPage from "./pages/products";
import DetailProductPage from "./pages/detail";
import NotFoundPages from "./pages/404";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Layouts/Navbar";
import DarkModeProvider from "./context/DarkMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
    errorElement: <NotFoundPages />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/register",
    element: <RegisterPages />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <Navbar />
        <RouterProvider router={router} />
      </DarkModeProvider>
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);
