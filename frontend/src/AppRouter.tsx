import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/product/detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
