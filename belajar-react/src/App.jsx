// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPages from "./pages/register";
import LoginPages from "./pages/login";
import NotFoundPages from "./pages/404";
import ProductsPage from "./pages/products";
import DetailProductPage from "./pages/detail";

function App() {
  return (
    <div>hello world</div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginPages />} />
    //     <Route path="/register" element={<RegisterPages />} />
    //     <Route path="/products" element={<ProductsPage />} />
    //     <Route path="/product/:id" element={<DetailProductPage />} />
    //     <Route path="*" element={<NotFoundPages />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
