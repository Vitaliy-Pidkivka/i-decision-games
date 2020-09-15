import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { STORES } from '../constants/general.constants'

import { withStores } from '../utils/helpers.utils'

import PokemonInfo from './PokemonInfo'
import Preloader from './Preloader/Preloader'
import PokemonTypeButton from './PokemonTypeButton'

const useStyles = makeStyles(theme => ({
  root: {
    flex: '0 0 48.333%',
    margin: '0 0.5% 20px',
    boxShadow: '0 0 4px black',
    borderRadius: 4,
    [theme.breakpoints.down('sm')]: {
      flex: '0 0 100%',
      margin: '0 0 20px'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: 'black'
  }
}))

const Pokemon = ({ pokemonStore, name, filter, setFilter, filterName }) => {
  const classes = useStyles()
  const [pokemon, setPokemon] = useState({})
  const [spriteIsLoading, setSpriteIsLoading] = useState(false)
  const {
    base_experience,
    height,
    moves = [],
    sprites = {},
    stats,
    types = [],
    weight
  } = pokemon
  const { front_default = '' } = sprites
  const totalMoves = moves.length
  const typeNames = types.map(({ type }) => type.name).join(', ')
  const baseInfo = { base_experience, height, totalMoves, typeNames, weight }

  const fetchPokemon = async () => {
    setSpriteIsLoading(true)
    const pokemon = await pokemonStore.fetchItem({ id: name })
    setPokemon(pokemon)
    setSpriteIsLoading(false)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  const typesList = types.map(({ type }) => type.name)

  const shouldReturnNull =
    (filter && !typesList.includes(filter)) ||
    (filterName && !name.includes(filterName))
  if (shouldReturnNull) return null

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {name}
          </Typography>
          <div>
            {spriteIsLoading && <Preloader size="small" />}
            <img src={front_default} alt="" />
          </div>
        </CardContent>
        <CardActions>
          <PokemonInfo
            name={name}
            stats={stats}
            baseInfo={baseInfo}
            sprite={front_default}
          />
          {typesList.map(type => (
            <PokemonTypeButton
              className={classes.margin}
              variant="contained"
              key={type}
              type={type}
              onClick={() => {
                const filterToSet = type === filter ? '' : type
                setFilter(filterToSet)
              }}
            >
              {type}
            </PokemonTypeButton>
          ))}
        </CardActions>
      </Card>
    </Fragment>
  )
}

Pokemon.propTypes = {
  pokemonStore: PropTypes.object,
  name: PropTypes.string,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  filterName: PropTypes.string
}

const stores = [STORES.pokemon]
export default withStores(Pokemon, stores)
