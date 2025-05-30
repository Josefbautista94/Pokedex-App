import "./PokemonInfo.css";

export default function PokemonInfo({ id, height, weight }) {
  const ft = `${Math.floor((height * 3.937) / 12)}.${Math.round(
    (height * 3.937) % 12
  )}`;

  const m = height / 10;

  const kg = weight / 10;

  const lbs = (weight * 0.220462).toFixed(1);
  return (
    <div className="pokemonInfo">
      <h2>Pokemon Info</h2>
      <ul>
        <li>
          <strong>Pokédex No:</strong>
          {id}
        </li>
        <li>
          <strong>Height:</strong>
          {ft}ft / {m}m
        </li>
        <li>
          <strong>Weight:</strong>
          {lbs}lbs / {kg}kg 
        </li>
      </ul>
    </div>
  );
}
