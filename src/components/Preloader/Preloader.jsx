import React from 'react'
import styles from './Preloader.module.scss'

import PropTypes from 'prop-types'

const Preloader = ({ size }) => (
  <div className={`${styles['lds-dual-ring']} ${size && styles[size]}`} />
)

Preloader.propTypes = {
  size: PropTypes.string
}

export default Preloader
