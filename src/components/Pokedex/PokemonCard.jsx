import React, { useEffect, useState } from 'react'
import { getPokemonByUrl } from '../../services/pokemons'
import { Link } from 'react-router-dom';

const PokemonCards = ({pokemonURL}) => {

    const [pokemoninfo, setPokemoninfo] = useState(null);

    const pokemonTypesFormat =(types =[])=>{ 
        return types.slice(0, 2).join(" / ")
    }

    const bgStylePokemon ={
    normal: 'bg-gradient-to-b from-[#CB98A7]  from-20% via-[#CB98A7]/10  via-40% to-[#CB98A7] to-60%',
    fighting: 'bg-gradient-to-b from-[#EF6139] from-20% via-[#EF6139]/10  via-40%to-[#EF6139] to-60%',
    flying: 'bg-gradient-to-b from-[#93B2C7] from-20% via-[#93B2C7]/10 via-40% to-[#93B2C7] to-60%',
    poison: 'bg-gradient-to-b from-[#9B69DA] from-20% via-[#9B69DA]/10 via-40% to-[#9B69DA] to-60%',
    ground: 'bg-gradient-to-b from-[#6E491F]  from-20%via-[#6E491F]/10 via-40% to-[#6E491F] to-60%',
    rock: 'bg-gradient-to-b from-[#8B3E22] from-20% via-[#8B3E22]/10 via-40% to-[#8B3E22] to-60%',
    bug: 'bg-gradient-to-b from-[#3B9852] from-20% via-[#3B9852]/10 via-40% to-[#3B9852] to-60%',
    ghost: 'bg-gradient-to-b from-[#906791] from-20% via-[#906791]/10  via-40%to-[#906791] to-60%', 
    steel: 'bg-gradient-to-b from-[#43BD94] from-20% via-[#43BD94]/10 via-40% to-[#43BD94] to-60%',
    fire: 'bg-gradient-to-b from-[#FD4D5A] from-20% via-[#FD4D5A]/10 via-40% to-[#FD4D5A] to-60%',
    water: 'bg-gradient-to-b from-[#85A8FC] from-20% via-[#85A8FC]/10 via-40% to-[#85A8FC] to-60%',
    grass: 'bg-gradient-to-b from-[#26CC50] from-20% from-20% via-[#26CC50]/10 via-40% to-[#26CC50] to-60%',
    electric: 'bg-gradient-to-b from-[#FAFB71] from-20% via-[#FAFB71]/10  via-40% to-[#FAFB71] to-60%',
    psychic: 'bg-gradient-to-b from-[#F71C90] from-20% via-[#F71C90]/10 via-40% to-[#F71C90] to-60%',
    ice: 'bg-gradient-to-b from-[#D6F1FA] from-20% via-[#D6F1FA]/10 to-[#D6F1FA] to-60%',
    dragon: 'bg-gradient-to-b from-[#60CCD9] from-20% via-[#60CCD9]/10 via-40% to-[#60CCD9] to-60%',
    dark: 'bg-gradient-to-b from-[#5A5979] from-20% via-[#5A5979]/10 via-40% to-[#5A5979] to-60%',
    fairy: 'bg-gradient-to-b from-[#EB1269] from-20% via-[#EB1269]/10  via-40%to-[#EB1269] to-60%',
    unknown: 'bg-gradient-to-b from-[#35433E] from-20% via-[#35433E]/10 via-40% to-[#35433E] to-60%',
    shadow: 'bg-gradient-to-b from-[#301645] from-20% via-[#301645]/10  via-40%to-[#301645] to-60%',
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
        <article className={`border-[5px] border-black text-center rounded-3xl z-10`}>
            <header className={`flex flex-col items-center justify-center h-[80px] bg-red-700 relative border-b-[5px] border-black rounded-t-2xl z-20`} >
                <div className={`h-[50px] bg-white rounded-full aspect-square top-14 z-30 
                        absolute
                        border-[5px] border-black
                        after:block after:content-[""] 
                        after:h-[30px] after:aspect-square
                        after:bg-red-500  after:rounded-full
                        after:border-[3px] after:border-black
                        after:top-[5px] after:right-[5px] after:absolute`}>
                </div>
            </header>

            <section className='flex flex-col bg-white/90  rounded-b-[19px] text-center relative z-10 items-center justify-center'>
                <div className={`h-[50px] bg-white rounded-full aspect-square top-40   
                        -translate-y-9 absolute
                        border-b-[4px] border-l-[1px] border-r-[1px] border-black
                        after:block after:content-[""] 
                        after:h-[28px] after:aspect-square
                        after:bg-white  after:rounded-full
                        after:border-b-[3px] after:border-r-[1px] after:border-l-[1px] after:border-black
                        after:top-[12px] after:right-[10px] after:absolute after:z-10`}>
                </div>
                <div className={`flex flex-col w-[100%] h-[150px] ${bgStylePokemon[pokemoninfo?.types[0]]} items-center aboslute z-20 py-6`}>
                    <div className='h-[75px] aspect-square'>
                        <img className='h-full w-full object-contain' src={pokemoninfo?.image ? pokemoninfo?.image: pokemoninfo?.image2} alt="" />
                    </div>
                    <h3 className='text-lg font-bold capitalize'>{pokemoninfo?.name}</h3>
                    <h4 className='text-sm'>{pokemonTypesFormat(pokemoninfo?.types)}</h4>
                    
                </div>
                <div className='border-t-[5px] border-black pt-4'>
                    <span className='font-semibold '>Stats</span>
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