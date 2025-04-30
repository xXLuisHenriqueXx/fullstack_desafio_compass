import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:name" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}
