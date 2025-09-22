import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import CategoryMeals from "./pages/CategoryMeals";
import MealDetail from "./pages/MealDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<CategoryMeals />} />
        <Route path="/meal/:id" element={<MealDetail />} />
      </Routes>
    </Router>
  );
}
