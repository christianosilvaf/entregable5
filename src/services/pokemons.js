import axios from "axios"

export const getAllPokemons = async()=>{
    const URL="https://pokeapi.co/api/v2/pokemon"
    const {data}=await axios.get(URL)
    return data.results;
};

export const getPokemonByUrl = async (pokemonURL) => {
    const {data}=await axios.get(pokemonURL);
    const pokemonFormatData ={
        id:data.id,
        name: data.name,
        types:formatTypes(data.types),
        stats: formatStats(data.stats),
        image: data.sprites.versions["generation-v"]["black-white"].animated.front_default,

    }
    return pokemonFormatData;
}

export const getPokemonByType= async(pokemonType)=>{
    const URL= `https://pokeapi.co/api/v2/type/${pokemonType}}`;
    const {data}=await axios.get(URL);
    const formatPokemons = data.pokemon.map((pokemon)=> pokemon.pokemon)
    return formatPokemons;
}

export const getPokemonById = async(pokemonid)=> {
    const URL= `https://pokeapi.co/api/v2/pokemon/${pokemonid}/`
    const {data}=await axios.get(URL);
    const pokemon ={
        id:data.id,
        name: data.name,
        types:formatTypes(data.types),
        stats: formatStats(data.stats),
        image: data.sprites.versions["generation-v"]["black-white"].animated.front_default,
        weight: data.weight,
        height: data.height,
        abilities: data.abilities,
        moves:data.moves
    }

    return pokemon;
};

const formatTypes=(types)=>{
    return types.map((type)=> type.type.name)
};

const formatStats = (stats)=>{
    return stats.map((stat)=> ({name: stat.stat.name, value: stat.base_stat}))
};