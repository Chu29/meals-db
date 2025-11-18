import { useState } from "react";
import "./Header.css";
import { useQuery } from "@tanstack/react-query";
import { searchMealsByName } from "../../services/meal.service";

function SearchBar() {
  const [mealName, setMealName] = useState();

  const { data } = useQuery({
    queryKey: ["search", mealName],
    queryFn: () => searchMealsByName(mealName),
  });

  console.log("Search Data", data);

  return (
    <form className="search-bar" onSubmit={(event) => event.preventDefault}>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={mealName}
        onChange={(event) => setMealName(event.target.value)}
      />
    </form>
  );
}

export default function Header() {
  return (
    <>
      <header className="header">
        <SearchBar />
      </header>
    </>
  );
}
