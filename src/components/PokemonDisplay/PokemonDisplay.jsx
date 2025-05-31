import "./PokemonDisplay.css";
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo";

export default function PokemonDisplay({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  function capitalizeFirstLetter(name) {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className="infoDiv">
      {/* Description Left on Desktop */}
      <div className="descriptionDiv">{pokemon.flavorText}</div>

      {/* Image, Name, Info Together */}
      <div className="imageContainer">
        <h1 className="pokeName">{capitalizeFirstLetter(pokemon.name)}</h1>
        <div className="pokemonImageDiv">
          <img
            className="pokeImage"
            src={pokemon.image}
            alt={pokemon.name || "Pokemon"}
          />
        </div>
        {/* Pokémon Info */}
        <PokemonInfo
          id={pokemon.id}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      </div>
    </div>
  );
}
