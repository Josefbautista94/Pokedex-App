import "./PokemonInfo.css";

export default function PokemonInfo({ id, height, weight }) {
  if (id === undefined || height === undefined || weight === undefined) {
    return <div className="pokemonInfo">Loading...</div>;
  }

  const totalInches = height * 3.937;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  const meters = (height / 10).toFixed(1);

  const pounds = (weight * 0.220462).toFixed(1);
  const kilograms = (weight / 10).toFixed(1);

  return (
    <div className="pokemonInfo">
      <h2>Pokémon Info</h2>
      <ul>
        <li><strong>Pokédex No:</strong> #{id}</li>
        <li><strong>Height:</strong> {feet}' {inches}"ft/ {meters} m</li>
        <li><strong>Weight:</strong> {pounds} lbs / {kilograms} kg</li>
      </ul>
    </div>
  );
}
