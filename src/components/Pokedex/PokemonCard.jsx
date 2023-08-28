import React, { useEffect, useState } from 'react'
import { getPokemonByUrl } from '../../services/pokemons'
import { Link } from 'react-router-dom';

const PokemonCards = ({pokemonURL}) => {

    const [pokemoninfo, setPokemoninfo] = useState(null);

    const pokemonTypesFormat =(types =[])=>{ 
        return types.slice(0, 2).join(" / ")
    }

    
    const bgStylePokemon ={
    normal: '#CB98A7',
    fighting: '#EF6139',
    flying: '#93B2C7',
    poison: '#9B69DA',
    ground: '#6E491F',
    rock: '#8B3E22',
    bug: '#3B9852',
    ghost: '#906791', 
    steel: '#43BD94',
    fire: '#FD4D5A',
    water: '#85A8FC',
    grass: '#26CC50',
    electric: '#FAFB71',
    psychic: '#F71C90',
    ice: '#D6F1FA',
    dragon: '#60CCD9',
    dark: '#5A5979',
    fairy: '#EB1269',
    unknown: '#35433E',
    shadow: '#301645',
};




    useEffect(()=>{
        getPokemonByUrl(pokemonURL)
            .then((data)=> setPokemoninfo(data))
            .catch((error)=> console.log(error));
    },[])

    return (
    <Link to={`/Pokedex/${pokemoninfo?.id}`}className='text-center border-[5px]'>
        <header className='h-[80px] bg-red-400 relative mb-8' >
            <div className='absolute left-1/2 -translate-x-1/2 -bottom-4
                            h-[65px] aspect-square'>
                <img className='h-full w-full object-contain' src={pokemoninfo?.image} alt="" />
            </div>
        </header>

        <section>
            <h3 className='text-lg font-bold capitalize'>{pokemoninfo?.name}</h3>
            <h4 className='text-sm'>{pokemonTypesFormat(pokemoninfo?.types)}</h4>
            <span>Types</span>
            <div>
                <ul className='grid gap-2 grid-cols-3 text-xs p-2'>
                    { 
                        pokemoninfo?.stats.map((stat)=>
                        <li className='flex flex-col' key={stat.name}> 
                            <span className='capitalize'>{stat.name}</span> 
                            <span className='font-bold'>{stat.value}</span>
                        </li> )
                    }
                </ul>
            </div>
        </section>
    </Link>
)
}

export default PokemonCards