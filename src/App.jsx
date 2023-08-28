import { Route,Routes } from 'react-router-dom'
import './App.css'

import PokemonDetail from './pages/PokemonDetail'
import Page404 from './pages/Page404'
import Home from './pages/home'
import Pokedex from './pages/Pokedex'
import PrivateRoutes from './components/auth/PrivateRoutes'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      
      <Route element={<PrivateRoutes />}> 
        <Route path='/Pokedex' element={<Pokedex />} />
        <Route path='/Pokedex/:PokemonId' element={<PokemonDetail />} />
      </Route>

      <Route path="*" element={<Page404/>} />
    </Routes>
  )
}

export default App
