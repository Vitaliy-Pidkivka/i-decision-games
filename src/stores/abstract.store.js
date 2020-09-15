import { action, observable } from 'mobx'

import { API_HOST } from '../constants/api.constants'
import {
  createItem,
  deleteItem,
  fetchData,
  updateItem
} from '../utils/api.utils'

class AbstractStore {
  apiHost = API_HOST
  namespace = 'routes'
  apiUrl = `${this.apiHost}/${this.namespace}`

  @observable loading = false
  @observable list = []
  @observable item = {}
  @observable count = 0
  @observable pagination = {
    offset: 0,
    limit: 10
  }

  @action setLoading = loading => (this.loading = loading)
  @action setList = list => (this.list = list)
  @action setItem = item => (this.item = item)
  @action setPagination = pagination => (this.pagination = pagination)
  @action setCount = count => (this.count = count)

  toggleLoading = () => this.setLoading(!this.loading)
  updatePagination = pagination =>
    this.setPagination({ ...this.pagination, ...pagination })

  createItem = async ({ data }) => {
    const { data: item = {} } = await createItem(this.apiUrl, data)

    this.setItem(item)
  }

  getItemApiUrl = id => `${this.apiUrl}${id ? `/${id}` : ''}`

  updateItem = async ({ id, data }) => {
    const { data: item = {} } = await updateItem(this.getItemApiUrl(id), data)

    this.setItem(item)
  }

  deleteItem = async id => {
    const { data: item = {} } = await deleteItem(this.getItemApiUrl(id))

    this.setItem(item)
  }

  fetchItem = async ({ id, data }, shouldSetLoading) => {
    if (shouldSetLoading) this.setLoading(true)
    const { data: item = {} } = await fetchData(this.getItemApiUrl(id), data)
    this.setItem(item)
    this.setLoading(false)
    return item
  }

  fetchList = async (params = {}) => {
    this.setLoading(true)
    const { data = {} } = await fetchData(this.apiUrl, {
      ...this.pagination,
      ...params
    })
    const { count, list, results, total } = data
    this.setList(results || list || [])
    this.setCount(total || count || 0)
    this.setLoading(false)
    return data
  }
}

export default AbstractStore
