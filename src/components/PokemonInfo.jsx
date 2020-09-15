import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

import { STORES } from '../constants/general.constants'
import { POKEMON_STAT_LABELS } from '../constants/pokemon.constants'

import { withStores } from '../utils/helpers.utils'

import PokemonStat from './PokemonStat'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '5px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  img: {
    width: '150px'
  }
}))

const PokemonInfo = ({ name, baseInfo, sprite }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  const body = (
    <div className={classes.paper}>
      <div>
        <h2 id="simple-modal-title">Name: {name}</h2>
        {Object.keys(baseInfo).map(key => (
          <PokemonStat
            label={POKEMON_STAT_LABELS[key]}
            value={baseInfo[key]}
            {...{ classes, key }}
          />
        ))}
      </div>
      <div>
        <img className={classes.img} src={sprite} alt={name} />
      </div>
    </div>
  )

  return (
    <div>
      <Button variant="contained" onClick={toggleOpen} type="button">
        More info
      </Button>
      <Modal
        open={open}
        onClose={toggleOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}
PokemonInfo.propTypes = {
  name: PropTypes.string,
  baseInfo: PropTypes.object,
  sprite: PropTypes.string
}
const stores = [STORES.pokemon]
export default withStores(PokemonInfo, stores)
