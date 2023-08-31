import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPokemonById } from '../services/pokemons'
import StatBarList from '../components/pokemonDetail/StatBarList';

const PokemonDetail = () => {

    const [pokemonData, setPokemonData] = useState(null);
	let [visibilityMov,setVisibilityMov]=useState(false);
	let [visibilityAbi,setVisibilityAbi]=useState(false);
	const navigate =useNavigate();

    const {PokemonId}=useParams()

    useEffect(()=>{
    getPokemonById(PokemonId)
        .then((data)=> setPokemonData(data)) 
        .catch((error)=> console.log(error)) 
    },[])
	

	const handleHideMovements=()=>{
		return (setVisibilityMov(!visibilityMov));
	};
	
	

	const handleHideAbilities=()=>{
		return (setVisibilityAbi(!visibilityAbi));
	};

	const fun =(visibilityMov)=> {
		if(visibilityMov){
			return "visible"
		} return "invisible"
	};

	const fun2 =(visibilityAbi)=> {
		if(visibilityAbi){
			return "visible"
		} return "invisible"
	};

	const handleGoPokedexList =()=>{
		navigate("/Pokedex")
	};


	return (
    <main>
        <div className='bg-red-500 min-[600px]:h-[600px] h-[900px] max-w-[700px] mt-3 mb-0 mx-auto border-[3px] border-black rounded-lg p-2 items-center'>
			<div className='flex justify-between p-2'>
				<div className='bg-cyan-500 aspect-square animate-pulse border-[5px] border-black h-[60px] rounded-full'>
				</div>

			    <button className='w-[50px] aspect-square bg-yellow-400 animate-bounce text-center rounded-lg text-black border-[5px]
				                border-sky-950 hover:bg-white hover:text-red-500 text-[20px] font-extrabold'
				        onClick={()=> handleGoPokedexList()}>X</button>
			</div>
			
			<section className='flex flex-col bg-black-500 items-center justify-center gap-5 p-5 min-[600px]:flex-row'>
                
			
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

			<div className='flex items-center gap-16 justify-center'>
				<button className='rounded-md bg-yellow-300 p-4 border-[2px]  border-black hover:animate-pulse'
				        onClick={()=>handleHideMovements()}
						> Movements </button>
				<button className='rounded-md bg-blue-300 p-4 border-[2px]  border-black hover:animate-pulse'
						onClick={()=>handleHideAbilities()}> Abilities </button>
			</div>
        </div>

		<div className={`bg-red-500 max-w-[700px] flex flex-col justify-center items-center mx-auto border-[4px] border-black rounded-md mt-0 pb-4 ${fun(visibilityMov)}`}>
			<div className='bg-[#44f814] w-[80%] h-[80%] border-b-[10px] border-r-[10px] 
							border-l-[10px] border-sky-950 rounded-3xl
							flex flex-wrap gap-2 p-3'>
				{
					pokemonData?.moves.map((move)=>
						<span className='text-[10px] bg-white/60 p-1 rounded-3xl' key={move?.name}> {move?.move?.name}</span>
					)
				}
			</div>
		</div>

		<div className={`bg-red-500 max-w-[700px]  flex flex-col items-center border-[4px] mx-auto border-black rounded-md mt-0 pb-4 ${fun2(visibilityAbi)}`}>
			<div className='bg-[#44f814] w-[80%] h-[80%] border-b-[10px] border-r-[10px] 
							border-l-[10px] border-sky-950 rounded-3xl
							flex flex-wrap gap-2 p-3'>
				{
					pokemonData?.abilities.map((ability)=>
						<span className='text-[10px] bg-white/60 p-1 rounded-3xl' key={ability?.name}> {ability?.ability?.name}</span>
					)
				}
			</div>
		</div>

    </main>
)
};

export default PokemonDetail