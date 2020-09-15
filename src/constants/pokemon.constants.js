import * as materialUiColors from '@material-ui/core/colors'

const {
  blue,
  brown,
  green,
  purple,
  red,
  grey,
  pink,
  blueGrey,
  yellow,
  amber
} = materialUiColors

export const POKEMON_TYPES = {
  bug: 'bug',
  grass: 'grass',
  fire: 'fire',
  flying: 'flying',
  poison: 'poison',
  water: 'water',
  normal: 'normal',
  fighting: 'fighting',
  ground: 'ground',
  rock: 'rock',
  ghost: 'ghost',
  steel: 'steel',
  electric: 'electric',
  psychic: 'psychic',
  ice: 'ice',
  dragon: 'dragon',
  dark: 'dark',
  fairy: 'fairy',
  shadow: 'shadow',
  unknown: 'unknown'
}

export const POKEMON_COLORS = {
  [POKEMON_TYPES.bug]: {
    backgroundColor: brown[500],
    hoverBackgroundColor: brown[700]
  },
  [POKEMON_TYPES.grass]: {
    backgroundColor: green[500],
    hoverBackgroundColor: green[700]
  },
  [POKEMON_TYPES.fire]: {
    backgroundColor: red[500],
    hoverBackgroundColor: red[700]
  },
  [POKEMON_TYPES.flying]: {
    backgroundColor: purple[300],
    hoverBackgroundColor: purple[700]
  },
  [POKEMON_TYPES.poison]: {
    backgroundColor: green[300],
    hoverBackgroundColor: green[500]
  },
  [POKEMON_TYPES.water]: {
    backgroundColor: blue[500],
    hoverBackgroundColor: blue[700]
  },
  [POKEMON_TYPES.normal]: {
    backgroundColor: blue[400],
    hoverBackgroundColor: blue[600]
  },
  [POKEMON_TYPES.fighting]: {
    backgroundColor: grey[200],
    hoverBackgroundColor: grey[300]
  },
  [POKEMON_TYPES.ground]: {
    backgroundColor: brown[300],
    hoverBackgroundColor: brown[500]
  },
  [POKEMON_TYPES.rock]: {
    backgroundColor: pink[300],
    hoverBackgroundColor: pink[500]
  },
  [POKEMON_TYPES.ghost]: {
    backgroundColor: grey[200],
    hoverBackgroundColor: grey[400]
  },
  [POKEMON_TYPES.steel]: {
    backgroundColor: grey[600],
    hoverBackgroundColor: grey[700]
  },
  [POKEMON_TYPES.electric]: {
    backgroundColor: blue[100],
    hoverBackgroundColor: blue[300]
  },
  [POKEMON_TYPES.psychic]: {
    backgroundColor: purple[100],
    hoverBackgroundColor: purple[300]
  },
  [POKEMON_TYPES.ice]: {
    backgroundColor: blue[600],
    hoverBackgroundColor: purple[800]
  },
  [POKEMON_TYPES.dragon]: {
    backgroundColor: red[700],
    hoverBackgroundColor: red[800]
  },
  [POKEMON_TYPES.dark]: {
    backgroundColor: blueGrey[700],
    hoverBackgroundColor: blueGrey[800]
  },
  [POKEMON_TYPES.fairy]: {
    backgroundColor: yellow[700],
    hoverBackgroundColor: yellow[800]
  },
  [POKEMON_TYPES.shadow]: {
    backgroundColor: blueGrey[300],
    hoverBackgroundColor: blueGrey[400]
  },
  [POKEMON_TYPES.unknown]: {
    backgroundColor: amber[300],
    hoverBackgroundColor: amber[400]
  }
}

export const POKEMON_STAT_LABELS = {
  base_experience: 'Base experience',
  height: 'Height',
  typeNames: 'Type',
  totalMoves: 'Total moves',
  weight: 'Weight'
}
