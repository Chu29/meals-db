import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import MealsPage from "./pages/MealsPage";
import MealDetailsPage from "./pages/MealDetailsPage";
import SearchedMealsPage from "./pages/SearchedMealsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/meal/category/:category" Component={MealsPage}></Route>
        <Route path="/meal/:id" Component={MealDetailsPage}></Route>
        <Route path="/meal/search/:name" Component={SearchedMealsPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
