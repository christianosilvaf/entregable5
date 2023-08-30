import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonById } from '../services/pokemons'
import StatBarList from '../components/pokemonDetail/StatBarList';

const PokemonDetail = () => {

    const [pokemonData, setPokemonData] = useState(null);

    const {PokemonId}=useParams()

    useEffect(()=>{
    getPokemonById(PokemonId)
        .then((data)=> setPokemonData(data)) 
        .catch((error)=> console.log(error)) 
    },[])

	return (
    <main>
        <div className='bg-red-500 min-[600px]:h-[550px] h-[900px] max-w-[700px] my-3 mx-auto border-[3px] border-black rounded-lg'>
			<div className='bg-cyan-500 w-[200px] h-[20px]'>
	
			</div>
			<section className='flex flex-col bg-black-500 items-center justify-center gap-2 p-5 min-[600px]:flex-row'>
                
			
				<header className='flex-col w-1/3 min-w-[300px] bg-[#44f814] border-[10px]
									border-sky-950 rounded-3xl min-[600px]:h-[371px] items-center justify-center'>
                    <div className='flex flex-col items-center justify-center text-center gap-1 p-3 py-14'>
                    	<span className=' text-black uppercase dis font-bold text-[30px] px-2'> {pokemonData?.name} </span>
                    	<img className='w-[50%] ' src={pokemonData?.image} alt="" />
                    	<span className=' text-black font-semibold'>{pokemonData?.types[0]}/ {pokemonData?.types[1]}</span>
                	</div>
                </header>

        		<article className='bg-[#44f814] border-[10px] border-sky-950 rounded-3xl w-1/3 p-2 min-w-[300px]'>
            		<StatBarList stats={pokemonData?.stats}/>
        		</article>

        	</section>

			<div className='flex items-center gap-3 justify-center'>
				<button className='rounded-md bg-yellow-300 p-4 border-[2px]  border-black '> Movements </button>
				<button className='rounded-md bg-blue-300 p-4 border-[2px]  border-black'> Others  </button>
			</div>
        </div>
    </main>
)
};

export default PokemonDetail