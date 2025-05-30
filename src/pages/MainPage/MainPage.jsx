import './MainPage.css';
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonDisplay from '../../components/PokemonDisplay/PokemonDisplay';
export default function MainPage() {
    return(
<div className = "mainDiv">
      <h1>Welcome to The Pokédex!</h1>
      <SearchBar  />
      <PokemonDisplay/>
</div>

    )
}