import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import MealsPage from "./pages/MealsPage";
import MealDetailsPage from "./pages/MealDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/meal/category/:category" Component={MealsPage}></Route>
        <Route path="/meal/:id" Component={MealDetailsPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
