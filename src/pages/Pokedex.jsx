import { useState } from 'react';
import PokemonList from '../components/Pokedex/PokemonList';
import usePokedex from '../hooks/usePokedex';
import { paginateData } from '../utils/pagination';
import Pagination from '../components/Pokedex/Pagination';

const Pokedex = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const {handleChange,name, pokemonName, pokemonType, pokemonsByName, 
    setPokemonName, setPokemonType,types} =usePokedex();

  const {itemsInCurrentPage,lastPage,pagesInCurrentBlock}=paginateData(pokemonsByName,currentPage);

  return (
    <main>

      <section className='w-[75%] h-[100%] flex flex-col gap-4 my-4 items-center justify-center mx-auto'>
        <p> <span className='text-[35px]'>Wellcome {name} </span>
        </p>
        <form className='flex flex-row gap-8 items-center justify-between' action="">
          <div > 
            <input className='w-[300px] rounded-2xl border-[4px] border-black p-3' onChange={handleChange(setPokemonName)} value={pokemonName} placeholder="Type pokemon name to search..." type="text" />
          </div>

          <select className='rounded-2xl border-[4px] border-black p-3' value={pokemonType} onChange={handleChange(setPokemonType)} name="" id="">
            <option value=""> All Pokemons </option>
            {
              types.map((type)=> <option className='capitalize' key={type.name} value={type.name}>{type.name}</option>)
            }
          </select>
        </form>
      </section>

      <Pagination lastPage={lastPage} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage}/>

      <PokemonList pokemons={itemsInCurrentPage} />

    </main>
  )
}

export default Pokedex