import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { getMealsByCategory } from "../services/meal.service";
import "./styles.css";

export default function MealCard() {
  const navigate = useNavigate();

  const { category } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["meals", category],
    queryFn: () => getMealsByCategory(category),
  });

  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  console.log("Meals", data);

  return (
    <div className="category-cards-container">
      {data.meals.map((meal) => (
        <div
          key={meal.idMeal}
          onClick={() => navigate(`/meal/${meal.idMeal}`)}
          className="category-card-body"
        >
          <img src={meal.strMealThumb} />
          <h1 className="category-card-title">{meal.strMeal}</h1>
        </div>
      ))}
    </div>
  );
}
