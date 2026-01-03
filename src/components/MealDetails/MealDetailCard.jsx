import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getMealDetailsById } from "../../services/meal.service";
import "./MealDetailCard.css";

export default function MealDetailCard() {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["mealDetail", id],
    queryFn: () => getMealDetailsById(id),
  });
  
  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  const meal = data.meals[0];
  console.log(meal);

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ingredient ? { ingredient, measure } : null;
  }).filter(Boolean);

  return (
    <div className="meal-container">
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <div className="meal-detail">
        <h1>{meal.strMeal}</h1>

        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <span className="measure">{item.measure}</span>{" "}
                {item.ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <h2>Instructions</h2>
          <p>{meal.strInstructions}</p>
        </div>

        <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
          Tutorial
        </a>
      </div>
    </div>
  );
}
