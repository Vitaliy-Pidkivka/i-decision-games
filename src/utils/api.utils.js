import * as axios from 'axios'

export const fetchData = (url, params) => axios.get(url, { params })

export const createItem = (url, data) => axios.post(url, { data })

export const updateItem = (url, data) => axios.put(url, { data })

export const deleteItem = url => axios.delete(url)
