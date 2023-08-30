import React, { useEffect, useState } from 'react'
import { getPokemonByUrl } from '../../services/pokemons'
import { Link } from 'react-router-dom';

const PokemonCards = ({pokemonURL}) => {

    const [pokemoninfo, setPokemoninfo] = useState(null);

    const pokemonTypesFormat =(types =[])=>{ 
        return types.slice(0, 2).join(" / ")
    }

    const bgStylePokemon ={
    normal: 'bg-gradient-to-b from-[#CB98A7] to-[#CB98A7]/30',
    fighting: 'bg-gradient-to-b from-[#EF6139] to-[#EF6139]/30',
    flying: 'bg-gradient-to-b from-[#93B2C7] to-[#93B2C7]/30',
    poison: 'bg-gradient-to-b from-[#9B69DA] to-[#9B69DA]/30',
    ground: 'bg-gradient-to-b from-[#6E491F] to-[#6E491F]/30',
    rock: 'bg-gradient-to-b from-[#8B3E22] to-[#8B3E22]/30',
    bug: 'bg-gradient-to-b from-[#3B9852] to-[#3B9852]/30',
    ghost: 'bg-gradient-to-b from-[#906791] to-[#906791]/30', 
    steel: 'bg-gradient-to-b from-[#43BD94] to-[#43BD94]/30',
    fire: 'bg-gradient-to-b from-[#FD4D5A] to-[#FD4D5A]/30',
    water: 'bg-gradient-to-b from-[#85A8FC] to-[#85A8FC]/30',
    grass: 'bg-gradient-to-b from-[#26CC50] to-[#26CC50]/30',
    electric: 'bg-gradient-to-b from-[#FAFB71] to-[#FAFB71]/30',
    psychic: 'bg-gradient-to-b from-[#F71C90] to-[#F71C90]/30',
    ice: 'bg-gradient-to-b from-[#D6F1FA] to-[#D6F1FA]/30',
    dragon: 'bg-gradient-to-b from-[#60CCD9] to-[#60CCD9]/30',
    dark: 'bg-gradient-to-b from-[#5A5979] to-[#5A5979]/30',
    fairy: 'bg-gradient-to-b from-[#EB1269] to-[#EB1269]/30',
    unknown: 'bg-gradient-to-b from-[#35433E] to-[#35433E]/30',
    shadow: 'bg-gradient-to-b from-[#301645] to-[#301645]/30',
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

    return (
    <Link to={`/Pokedex/${pokemoninfo?.id}`} >
        <article className={`${borderStylePokemon[pokemoninfo?.types[0]]} text-center rounded-3xl`}>
            <header className={`h-[80px] ${bgStylePokemon[pokemoninfo?.types[0]]} relative  rounded-t-2xl`} >
                <div className='absolute left-1/2 -translate-x-1/2 -bottom-4
                                h-[65px] aspect-square'>
                    <img className='h-full w-full object-contain' src={pokemoninfo?.image} alt="" />
                </div>
            </header>

            <section className='bg-white/90 pt-5 rounded-b-[19px]'>
                <h3 className='text-lg font-bold capitalize'>{pokemoninfo?.name}</h3>
                <h4 className='text-sm'>{pokemonTypesFormat(pokemoninfo?.types)}</h4>
                <span className='font-semibold'>Stats</span>
                <div>
                    <ul className='grid gap-2 grid-cols-3 text-xs p-2 '>
                        { 
                            pokemoninfo?.stats.map((stat)=>
                            <li className={`flex flex-col border-[1px] rounded-full ${borderStylePokemon[pokemoninfo?.types[0]]} p-2 gap-1 justify-between`} key={stat.name}> 
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