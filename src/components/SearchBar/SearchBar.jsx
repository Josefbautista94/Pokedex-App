import { useState, useEffect } from "react";
import pokeApi from "../../api/pokeApi";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  //Fetch all Pokemon names once when the component mounts
  useEffect(() => {
    async function fetchAllPokemon() {
      try {
        const res = await pokeApi.get(`pokemon?limit=100000&offset=0`);
        const names = res.data.results.map((poke) => poke.name);
        setAllPokemon(names);
      } catch (error) {
        console.error(
          "There was an error trying to fetch the Pokemon list:",
          error
        );
      }
    }
    fetchAllPokemon();
  }, []);


  const handleSearch = () => {
    if (search.trim()) {
      onSearch(search.trim().toLowerCase());
      setSuggestions([]); // Clear suggestions after search
    }
  };

  //Handle input typing
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if(value.length >0){
      const filtered = allPokemon.filter((name)=>
      name.startsWith(value.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 5)); // Limit suggestions to 5
    }else{
      setSuggestions([]); // Clear suggestions if input is empty
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); //  prevents reload
      handleSearch();
    }
  };

  // when clicking on a suggestion
  const handleSuggestionClick = (name) => {
    setSearch(name);
    onSearch(name);
    setSuggestions([]); // Clear suggestions after selection
  }

  return (
    <div className="searchDiv">
      <h2>Search for a Pokémon!</h2>
      <input
        className="pokeSearch"
        type="text"
        placeholder="Search A Pokémon!"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
     

      {/* ⬇ Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className="suggestionsList">
          {suggestions.map((name) => (
            <li
              key={name}
              className="suggestionItem"
              onClick={() => handleSuggestionClick(name)}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </li>
          ))}
        </ul>
      )}
       <button className="pokeButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );

}
