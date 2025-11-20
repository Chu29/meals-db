import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { searchMealByName } from "../services/meal.service";
import Header from "../components/Header/Header";

export default function SearchedMealsPage() {
  const navigate = useNavigate();
  let query = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["search", query.name],
    queryFn: () => searchMealByName(query.name),
  });

  console.log(data);

  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <>
      {data.meals != null ? (
        <>
          <div className="header">
            <h1>MealDB.</h1>
            <Header />
          </div>
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
        </>
      ) : (
        <>
          <div className="header">
            <h1>MealDB.</h1>
            <Header />
          </div>
          <h1>Not found Search something else...</h1>
        </>
      )}
    </>
  );
}
