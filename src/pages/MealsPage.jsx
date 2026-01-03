import MealCard from "../components/MealCard";
import Header from "../components/Header/Header";

export default function CategoryPage() {
  return (
    <div>
      <div className="header">
        <h1>MealDB.</h1>
        <Header />
      </div>
      <h1 className="title">Meals <span className="caption">Click on a card to see details about a meal</span></h1>
      <MealCard />
    </div>
  );
}
