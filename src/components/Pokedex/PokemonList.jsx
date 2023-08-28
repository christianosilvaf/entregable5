import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemons}) => {
    return (
    <section className='grid px-4 gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]'>
        {
            pokemons.map((pokemon)=> (
            <PokemonCard key={pokemon.url} pokemonURL={pokemon.url}/>
        ))}
    </section>
)
}

export default PokemonList