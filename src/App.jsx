import React from 'react'
import { Provider } from 'mobx-react'

import pokemonStore from './stores/pokemon.store'
import pokemonFormStore from './stores/pokemonForm.store'

import PokemonList from './components/PokemonList'

const stores = {
  pokemonStore,
  pokemonFormStore
}

const App = () => {
  return (
    <Provider {...stores}>
      <PokemonList />
    </Provider>
  )
}

export default App
