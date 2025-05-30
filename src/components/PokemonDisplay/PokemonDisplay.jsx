import "./PokemonDisplay.css";

export default function PokemonDisplay({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  return (
    <div className="infoDiv">
      <div className="descriptionDiv">{pokemon.flavorText}</div>
      <div className="pokemonImageDiv">
        <img className="pokeImage" src={pokemon.image} alt={pokemon.name || 'Pokemon'} />
      </div>
    </div>
  );
}
