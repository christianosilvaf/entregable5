import HeaderPokeball from '../components/Layout/HeaderPokeball';
import PokemonList from '../components/Pokedex/PokemonList';
import usePokedex from '../hooks/usePokedex';

const Pokedex = () => {
  
  const {handleChange,name, pokemonName, pokemonType, pokemonsByName, 
    setPokemonName, setPokemonType} =usePokedex();

  return (
    <main>

      <HeaderPokeball/> 

      <section className='w-[75%] h-[100%] flex flex-col gap-4 my-4 items-center justify-center mx-auto'>
        <p> <span className='text-[35px]'>Wellcome {name} </span>
        </p>
        <form className='flex flex-row gap-8 items-center justify-between' action="">
          <div > 
            <input className='w-[300px] rounded-2xl border-[4px] border-black p-3' onChange={handleChange(setPokemonName)} value={pokemonName} placeholder="Type pokemon name to search..." type="text" />
          </div>

          <select className='rounded-2xl border-[4px] border-black p-3' value={pokemonType} onChange={handleChange(setPokemonType)} name="" id="">
            <option value=""> All Pokemons </option>
            <option value="rock"> Rock </option>
          </select>
        </form>
      </section>

      <PokemonList pokemons={pokemonsByName} />

    </main>
  )
}

export default Pokedex