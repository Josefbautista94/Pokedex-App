import { useState } from "react";
import "./SearchBar.css";
export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      onSearch(search.trim().toLowerCase());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className = "searchDiv">
      <h2>Search for a Pokémon!</h2>
      <input
        className="pokeSearch"
        type="search"
        placeholder="Serach your favorite Pokemon?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="pokeButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
