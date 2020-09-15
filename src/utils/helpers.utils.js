import { inject, observer } from 'mobx-react'

export const createRange = (start = 0, end = 10) =>
  Array.from({ length: end - start + 1 })
    .fill(start)
    .map((item, index) => item + index)

export const withStores = (Component, stores) =>
  inject(...stores)(observer(Component))
