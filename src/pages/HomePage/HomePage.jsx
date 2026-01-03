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
      <h1 className="title">Meals Categories <span className="caption" >Click on a card to see meals under each category</span></h1>
        <MealCategoryCard />
      </main>
    </>
  );
}
