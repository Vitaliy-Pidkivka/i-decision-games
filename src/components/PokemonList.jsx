import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TextField from '@material-ui/core/TextField'

import { STORES } from '../constants/general.constants'

import { withStores } from '../utils/helpers.utils'

import Pagination from './Pagination'
import Pokemon from './Pokemon'
import Preloader from './Preloader/Preloader'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '5px auto 0 auto',
    padding: '20px 10px 0',
    minHeight: '400px',
    height: '490px',
    overflowY: 'scroll',
    background: 'lightblue',
    borderRadius: 6,
    boxShadow: '0 0 20px black'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0 0 0'
  },
  list: {
    listStyle: 'none',
    paddingLeft: 15
  },
  searchField: {
    display: 'flex',
    justifyContent: 'center',
    width: '300px',
    margin: '12px auto 0',
    '& .MuiInputBase-root ': {
      '& > input': {
        display: 'block',
        margin: '0 auto'
      }
    }
  }
}))

const PAGINATION_LIMITS = [10, 20, 50]

const PokemonList = ({ pokemonStore }) => {
  const { count, pagination, list, loading, updatePagination } = pokemonStore

  const classes = useStyles()

  const [filter, setFilter] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    pokemonStore.fetchList()
  }, [pagination])

  return (
    <>
      <header className={classes.header}>
        <h2>Pokemon List</h2>
        <nav className={classes.nav}>
          <b>Show:</b>
          <ButtonGroup
            className={classes.list}
            color="primary"
            size="small"
            aria-label="outlined primary button group"
          >
            {PAGINATION_LIMITS.map(value => (
              <Button
                key={value}
                color={`${
                  value === pagination.limit ? 'secondary' : 'primary'
                }`}
                onClick={() => updatePagination({ limit: value })}
              >
                {value}
              </Button>
            ))}
          </ButtonGroup>
        </nav>
      </header>
      <Container className={classes.root}>
        {loading && <Preloader />}
        {!loading &&
          list.map(({ name }) => (
            <Pokemon
              filter={filter}
              setFilter={setFilter}
              filterName={filterName}
              key={name}
              name={name}
            />
          ))}
      </Container>
      <footer>
        <Pagination {...{ count, pagination, updatePagination }} />
        <TextField
          id="standard-search"
          label="Search by name"
          type="search"
          className={classes.searchField}
          onChange={e => setFilterName(e.currentTarget.value)}
        />
      </footer>
    </>
  )
}
PokemonList.propTypes = {
  pokemonStore: PropTypes.object
}
const stores = [STORES.pokemon]
export default withStores(PokemonList, stores)
