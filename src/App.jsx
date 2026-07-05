import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RecipeEditor from "./pages/RecipeEditor";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<RecipeEditor />} />
    </Routes>
  );
}