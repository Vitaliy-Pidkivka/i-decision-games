import AbstractStore from './abstract.store'

import {
  POKEMON_API_HOST,
  POKEMON_NAMESPACES
} from '../constants/api.constants'

class PokemonStore extends AbstractStore {
  apiHost = POKEMON_API_HOST
  namespace = POKEMON_NAMESPACES.pokemon
  apiUrl = `${this.apiHost}/${this.namespace}`
}

export default new PokemonStore()
