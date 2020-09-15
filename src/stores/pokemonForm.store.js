import AbstractStore from './abstract.store'

import {
  POKEMON_API_HOST,
  POKEMON_NAMESPACES
} from '../constants/api.constants'

class PokemonFormStore extends AbstractStore {
  apiHost = POKEMON_API_HOST
  namespace = POKEMON_NAMESPACES.pokemonForm
  apiUrl = `${this.apiHost}/${this.namespace}`
}

export default new PokemonFormStore()
