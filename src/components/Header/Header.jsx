import "./Header.css";
function SearchBar() {
  return (
    <form className="search-bar" onSubmit={(event) => event.preventDefault()}>
      <input type="text" placeholder="Search for a meal" />
    </form>
  );
}

export default function Header() {
  return (
    <header className="header">
      <SearchBar />
    </header>
  );
}
