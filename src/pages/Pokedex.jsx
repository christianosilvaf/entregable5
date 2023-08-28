import PokemonList from '../components/Pokedex/PokemonList';
import usePokedex from '../hooks/usePokedex';

const Pokedex = () => {
  
  const {handleChange,name, pokemonName, pokemonType, pokemonsByName, 
    setPokemonName, setPokemonType} =usePokedex();

  return (
    <main>
      <section>
        <p> <span>Wellcome {name} </span>
        </p>
        <form action="">
          <div> 
            <input onChange={handleChange(setPokemonName)} value={pokemonName} placeholder="Type pokemon name to search..." type="text" />
          </div>

          <select value={pokemonType} onChange={handleChange(setPokemonType)} name="" id="">
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