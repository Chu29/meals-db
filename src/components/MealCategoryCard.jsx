import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getMealCategories } from "../services/meal.service";
import "./styles.css";

export default function MealCategoryCard() {
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getMealCategories,
  });

  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  console.log("Meal Categories", data);

  return (
    <div className="category-cards-container">
      {data.categories.map((category) => (
        <div
        className="category-card-body"
          key={category.idCategory}
          onClick={() => navigate(`/meal/category/${category.strCategory}`)}
        >
          <img src={category.strCategoryThumb} alt={category.strCategory} />
          <h1 className="category-card-title">{category.strCategory}</h1>
        </div>
      ))}
    </div>
  );
}
