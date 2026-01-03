import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/meal/search/${searchTerm}`);
  };

  return (
    <form className="search-bar" onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        required
      />

      <button type="submit">Search</button>
    </form>
  );
}
