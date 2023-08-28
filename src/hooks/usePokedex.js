import { useEffect, useState } from "react";
import { getAllPokemons, getPokemonByType } from "../services/pokemons";
import { useSelector } from "react-redux";

const  usePokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonType, setPokemonType] = useState("");

    const handleChange =(setState)=>(e)=>{
    setState(e.target.value)
    }

    const pokemonsByName =pokemons.filter((pokemon)=> 
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));

    const {name} = useSelector(store => store.trainer);

    useEffect(()=>{
    if(!pokemonType){
    getAllPokemons()
        .then((data)=>setPokemons(data))
        .catch((error)=>console.log(error));
    }
    },[pokemonType]);

    useEffect(()=>{
    if(pokemonType){
        getPokemonByType(pokemonType).then((data)=> setPokemons(data))
    }
    },[pokemonType]);

    return {
        name,
        pokemonName,
        setPokemonName,
        pokemonType,
        setPokemonType,
        handleChange,
        pokemonsByName
    }
    
}

export default  usePokedex