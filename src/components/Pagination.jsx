import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import prev from '../assets/images/prev-arrow.svg'
import next from '../assets/images/next-arrow.svg'

import { createRange } from '../utils/helpers.utils'

import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto 0',
    listStyle: 'none',
    padding: '0',
    '& > li': {
      padding: '0 5px'
    }
  },
  button: {
    minWidth: 'auto'
  }
}))

const PORTION_NUMBERS = 4

const Pagination = ({ count, pagination, updatePagination }) => {
  const { offset, limit } = pagination
  const [portionNumber, setPortionNumber] = useState(1)
  const classes = useStyles()

  const numbers = createRange(0, Math.ceil(count / limit) - 1)

  const portionCount = Math.ceil(count / PORTION_NUMBERS)
  const leftPortionPageNumber = (portionNumber - 1) * PORTION_NUMBERS
  const rightPortionPageNumber = portionNumber * PORTION_NUMBERS

  return (
    <div>
      <ul className={classes.root}>
        {portionNumber > 1 && (
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={() => {
              setPortionNumber(portionNumber - 1)
            }}
          >
            <img src={prev} alt="" />
          </Button>
        )}
        {numbers &&
          numbers
            .filter(
              page =>
                page >= leftPortionPageNumber && page <= rightPortionPageNumber
            )
            .map(value => (
              <li key={value}>
                <Button
                  className={classes.button}
                  variant="contained"
                  size="small"
                  color={`${value === offset ? 'secondary' : 'primary'}`}
                  onClick={() => updatePagination({ offset: value })}
                >
                  {value + 1}
                </Button>
              </li>
            ))}
        <li>
          {portionCount > portionNumber * 10 && (
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              onClick={() => {
                setPortionNumber(portionNumber + 1)
              }}
            >
              <img src={next} alt="" />
            </Button>
          )}
        </li>
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  count: PropTypes.number,
  pagination: PropTypes.object,
  updatePagination: PropTypes.func
}

export default Pagination
