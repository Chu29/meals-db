import Header from "../components/Header/Header";
import MealDetailCard from "../components/MealDetails/MealDetailCard";
export default function MealDetailsPage() {
  return (
    <div>
      <div className="header">
        <h1>MealDB.</h1>
        <Header />
      </div>
      <MealDetailCard />
    </div>
  );
}
