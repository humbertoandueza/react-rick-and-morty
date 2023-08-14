import { getValuesFilter } from "../helpers"
export const getStorageFilters = () => {
  return localStorage.getItem('filters') ? JSON.parse(localStorage.getItem('filters')) : getValuesFilter
}