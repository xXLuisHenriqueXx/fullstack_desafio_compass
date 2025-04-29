import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
