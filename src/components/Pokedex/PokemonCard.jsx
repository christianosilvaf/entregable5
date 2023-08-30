import React, { useEffect, useState } from 'react'
import { getPokemonByUrl } from '../../services/pokemons'
import { Link } from 'react-router-dom';

const PokemonCards = ({pokemonURL}) => {

    const [pokemoninfo, setPokemoninfo] = useState(null);

    const pokemonTypesFormat =(types =[])=>{ 
        return types.slice(0, 2).join(" / ")
    }

    const bgStylePokemon ={
    normal: 'bg-gradient-to-b from-[#CB98A7] via-[#CB98A7]/20 to-[#CB98A7]',
    fighting: 'bg-gradient-to-b from-[#EF6139] via-[#EF6139]/20 to-[#EF6139]',
    flying: 'bg-gradient-to-b from-[#93B2C7] via-[#93B2C7]/20 to-[#93B2C7]',
    poison: 'bg-gradient-to-b from-[#9B69DA] via-[#9B69DA]/20 to-[#9B69DA]',
    ground: 'bg-gradient-to-b from-[#6E491F] via-[#6E491F]/20 to-[#6E491F]',
    rock: 'bg-gradient-to-b from-[#8B3E22] via-[#8B3E22]/20 to-[#8B3E22]/',
    bug: 'bg-gradient-to-b from-[#3B9852] via-[#3B9852]/20 to-[#3B9852]',
    ghost: 'bg-gradient-to-b from-[#906791] via-[#906791]/20 to-[#906791]', 
    steel: 'bg-gradient-to-b from-[#43BD94] via-[#43BD94]/20 to-[#43BD94]',
    fire: 'bg-gradient-to-b from-[#FD4D5A] via-[#FD4D5A]/20 to-[#FD4D5A]',
    water: 'bg-gradient-to-b from-[#85A8FC] via-[#85A8FC]/20 to-[#85A8FC]',
    grass: 'bg-gradient-to-b from-[#26CC50] via-[#26CC50]/20 to-[#26CC50]',
    electric: 'bg-gradient-to-b from-[#FAFB71] via-[#FAFB71]/20  to-[#FAFB71]',
    psychic: 'bg-gradient-to-b from-[#F71C90] via-[#F71C90]/20 to-[#F71C90]',
    ice: 'bg-gradient-to-b from-[#D6F1FA] via-[#D6F1FA]/20 to-[#D6F1FA]',
    dragon: 'bg-gradient-to-b from-[#60CCD9] via-[#60CCD9]/20 to-[#60CCD9]',
    dark: 'bg-gradient-to-b from-[#5A5979] via-[#5A5979]/20 to-[#5A5979]',
    fairy: 'bg-gradient-to-b from-[#EB1269] via-[#EB1269]/20 to-[#EB1269]',
    unknown: 'bg-gradient-to-b from-[#35433E] via-[#35433E]/20 to-[#35433E]',
    shadow: 'bg-gradient-to-b from-[#301645] via-[#301645]/20 to-[#301645]',
};


const borderStylePokemon ={
    normal: 'border-[5px] border-[#CB98A7]',
    fighting: 'border-[5px] border-[#EF6139]',
    flying: 'border-[5px] border-[#93B2C7]',
    poison: 'border-[5px] border-[#9B69DA]' ,
    ground: 'border-[5px] border-[#6E491F]',
    rock: 'border-[5px] border-[#8B3E22]',
    bug: 'border-[5px] border-[#3B9852] ',
    ghost: 'border-[5px] border-[#906791] ', 
    steel: 'border-[5px] border-[#43BD94]',
    fire: 'border-[5px] border-[#FD4D5A]' ,
    water: 'border-[5px] border-[#85A8FC]',
    grass: 'border-[5px] border-[#26CC50] ',
    electric: 'border-[5px] border-[#FAFB71]',
    psychic: 'border-[5px] border-[#F71C90]' ,
    ice: 'border-[5px] border-[#D6F1FA] ',
    dragon: 'border-[5px] border-[#60CCD9]',
    dark: 'border-[5px] border-[#5A5979]' ,
    fairy: 'border-[5px] border-[#EB1269]',
    unknown: 'border-[5px] border-[#35433E]',
    shadow: 'border-[5px] border-[#301645]',
};

const textStylePokemon ={
    normal: 'text-[#CB98A7]',
    fighting: 'text-[#EF6139]',
    flying: 'text-[#93B2C7]',
    poison: 'text-[#9B69DA]' ,
    ground: 'text-[#6E491F]',
    rock: 'text-[#8B3E22]',
    bug: 'text-[#3B9852] ',
    ghost: 'text-[#906791] ', 
    steel: 'text-[#43BD94]',
    fire: 'text-[#FD4D5A]' ,
    water: 'text-[#85A8FC]',
    grass: 'text-[#26CC50] ',
    electric: 'text-[#FAFB71]',
    psychic: 'text-[#F71C90]' ,
    ice: 'text-[#D6F1FA] ',
    dragon: 'text-[#60CCD9]',
    dark: 'text-[#5A5979]' ,
    fairy: 'text-[#EB1269]',
    unknown: 'text-[#35433E]',
    shadow: 'text-[#301645]',
};

    useEffect(()=>{
        getPokemonByUrl(pokemonURL)
            .then((data)=> setPokemoninfo(data))
            .catch((error)=> console.log(error));
    },[])

    //${borderStylePokemon[pokemoninfo?.types[0]]}
    //
    return (
    <Link to={`/Pokedex/${pokemoninfo?.id}`} >
        <article className={`border-[5px] border-black text-center rounded-3xl z-1`}>
            <header className={`flex flex-col items-center justify-center h-[80px] bg-red-700 relative border-b-[5px] border-black rounded-t-2xl z-2`} >
                <div className={`h-[70px] bg-white rounded-full aspect-square top-10 z-3 
                        absolute
                        border-[8px] border-black
                        after:block after:content-[""] 
                        after:h-[38px] after:aspect-square
                        after:bg-red-500  after:rounded-full
                        after:border-[6px] after:border-black
                        after:top-[8px] after:right-[8px] after:absolute`}>
                </div>
            </header>

            <section className='flex flex-col bg-white/90  rounded-b-[19px] text-center relative z-1 items-center justify-center'>
                <div className={`h-[70px] bg-white rounded-full aspect-square top-40   
                        -translate-y-12 absolute
                        border-[8px] border-black
                        after:block after:content-[""] 
                        after:h-[38px] after:aspect-square
                        after:bg-white  after:rounded-full
                        after:border-[6px] after:border-black
                        after:top-[8px] after:right-[8px] after:absolute after:z-1`}>
                </div>
                <div className={`flex flex-col w-[100%] ${bgStylePokemon[pokemoninfo?.types[0]]} items-center aboslute z-2`}>
                    <div className='h-[75px] aspect-square'>
                        <img className='h-full w-full object-contain' src={pokemoninfo?.image} alt="" />
                    </div>
                    <h3 className='text-lg font-bold capitalize'>{pokemoninfo?.name}</h3>
                    <h4 className='text-sm'>{pokemonTypesFormat(pokemoninfo?.types)}</h4>
                    <span className='font-semibold'>Stats</span>
                </div>
                <div className='border-t-[5px] border-black'>
                    <ul className='grid gap-2 grid-cols-3 text-xs p-2 '>
                        { 
                            pokemoninfo?.stats.map((stat)=>
                            <li className={`flex flex-col border-[1px] rounded-full border-gray-300 h-[80px]  p-3 gap-0 justify-center`} key={stat.name}> 
                                <span className={`capitalize text-[12px] text-center whitespace-pre-wrap text-black/80`} >{stat.name}</span> 
                                <span className={`font-bold text-[15px] ${textStylePokemon[pokemoninfo?.types[0]]}`}>{stat.value}</span>
                            </li> )
                        }
                    </ul>
                </div>
            </section>
        </article>
    </Link>
)
}

export default PokemonCards