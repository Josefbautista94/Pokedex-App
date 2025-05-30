import { useState } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonDisplay from '../../components/PokemonDisplay/PokemonDisplay';
import pokeApi from '../../api/pokeApi'; 
import './MainPage.css';

export default function MainPage() {

const [pokemon,setPokemon] = useState(null);


const fetchPokemon = async(name)=>{
    try{
const res = await pokeApi.get(`pokemon/${name}`);
const speciesRes = await pokeApi.get(`pokemon-species/${name}`)

    }
    catch(error){
        console.error("😓 There was an error fetching the Pokemon:" , error)
    }
};


    return(
<div className = "mainDiv">
      <h1>Welcome to The Pokédex!</h1>
      <SearchBar  />
      <PokemonDisplay/>
</div>

    )
}