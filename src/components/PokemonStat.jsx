import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const PokemonStat = ({ classes, label, value }) => (
  <Typography color="textSecondary" className={classes.infoWrapper}>
    <span>{label}: </span>
    <span>{value}</span>
  </Typography>
)

PokemonStat.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PokemonStat
