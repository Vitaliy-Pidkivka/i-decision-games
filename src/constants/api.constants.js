const ENVIRONMENTS = {
  development: 'http://localhost:8000',
  production: 'https://api.i-decision-games.com',
  staging: 'https://api.staging.i-decision-games.com'
}

export const API_HOST = ENVIRONMENTS[process.env.ENVIRONMENT]

export const POKEMON_API_HOST = 'https://pokeapi.co/api/v2'

export const POKEMON_NAMESPACES = {
  ability: 'ability',
  item: 'item',
  move: 'move',
  pokemon: 'pokemon',
  pokemonForm: 'pokemon-form',
  pokemonSpecies: 'pokemon-species',
  type: 'type'
}
