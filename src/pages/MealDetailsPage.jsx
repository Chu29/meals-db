import Header from "../components/Header/Header";
import MealDetailCard from "../components/MealDetails/MealDetailCard";
export default function MealDetailsPage() {
  Array().reverse()
  return (
    <div>
      <div className="header">
        <h1>MealDB.</h1>
        <Header />
      </div>
      <h1 className="title">Meal Details <span className="caption">Check out Ingredients and Instructions on how to cook this meal</span></h1>
      <MealDetailCard />
    </div>
  );
}
