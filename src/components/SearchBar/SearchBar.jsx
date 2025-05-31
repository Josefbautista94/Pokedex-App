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
      e.preventDefault(); //  prevents reload
      handleSearch();
    }
  };

  return (
    <div className="searchDiv">
      <h2>Search for a Pokémon!</h2>
      <input
        className="pokeSearch"
        type="text" /*  changed to text */
        placeholder="Search A Pokémon!"
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
