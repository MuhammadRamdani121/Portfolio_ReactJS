import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import TestNavbar from "../pages/testingNavbar";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<TestNavbar />} />
    </Routes>
  );
}
