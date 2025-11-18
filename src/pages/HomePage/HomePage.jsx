import MealCategoryCard from "../../components/MealCategoryCard";
import Header from "../../components/Header/Header";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="header">
        <h1>MealDB.</h1>
        <Header />
      </div>
      <main className=".category-cards-container">
        <MealCategoryCard />
      </main>
    </>
  );
}
