import MealCard from "../components/MealCard";
import Header from "../components/Header/Header";

export default function CategoryPage() {
  return (
    <div>
      <div className="header">
        <h1>MealDB.</h1>
        <Header />
      </div>
      <MealCard />
    </div>
  );
}
