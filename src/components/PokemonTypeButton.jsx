import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import { POKEMON_COLORS } from '../constants/pokemon.constants'

import PropTypes from 'prop-types'

const PokemonTypeButton = ({ type, ...props }) => {
  const { backgroundColor, hoverBackgroundColor } = POKEMON_COLORS[type] || {}
  const withTheme = withStyles(({ palette }) => ({
    root: {
      backgroundColor,
      color: palette.getContrastText(backgroundColor),
      '&:hover': {
        backgroundColor: hoverBackgroundColor
      }
    }
  }))
  const StyledButton = withTheme(Button)

  return <StyledButton {...props} />
}

PokemonTypeButton.propTypes = {
  type: PropTypes.string
}

export default PokemonTypeButton
