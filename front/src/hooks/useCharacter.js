/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { setCharacters, setFilters } from '../store'
import { useEffect, useState } from "react"
import { useFetch } from "./"
import { getStorageFilters, getValuesFilter } from "../helpers"
export const useCharacterFetch = () => {

  const [loadInitial, setLoadInitial] = useState(false)
  const { items, info, filters } = useSelector(state => state.characters)
  const { search, status, gender, currentPage } = filters

  const { data, isLoading, hasError, getFetch } = useFetch(`/character/?name=${search}&status=${status}&gender=${gender}&page=${currentPage}`)

  const dispatch = useDispatch()

  const getCharacters = () => {
    getFetch()
  }

  const onHandleChange = (evt) => {
    setLoadInitial(true)
    const { name, value } = evt.target;
    dispatch(setFilters({ [name]: value }))

  }

  const onHangleClickPrev = (event) => {
    setLoadInitial(true)
    event.preventDefault();
    dispatch(setFilters({ currentPage: currentPage - 1 }))

  }

  const onHangleClickNext = (event) => {
    setLoadInitial(true)
    event.preventDefault();
    dispatch(setFilters({ currentPage: currentPage + 1 }))
  }

  const onClearFilters = () => {
    setLoadInitial(true)
    localStorage.clear()
    dispatch(setFilters(getValuesFilter))
    window.location.reload(false);
  }

  useEffect(() => {
    if (data) {
      dispatch(setCharacters(data))
    }
    if (hasError) {
      dispatch(setCharacters({
        info: {
          "count": null,
          "pages": null,
          "next": null,
          "prev": null
        },
        results: []
      }))
    }
  }, [data])

  useEffect(() => {
    const filters = getStorageFilters()
    dispatch(setFilters(filters))
    getCharacters()
  }, [])


  const changeFilters = () => {
    if (loadInitial) {
      const currentFilter = getStorageFilters()
      const filters = JSON.stringify({ ...currentFilter, search, status, gender, currentPage })
      localStorage.setItem('filters', filters)
      getCharacters()
    }
  }


  useEffect(() => {
    changeFilters()
  }, [filters])

  return {
    items,
    info,
    isLoading,
    search,
    status,
    gender,
    loadInitial,
    currentPage,
    getCharacters,
    setLoadInitial,
    onHandleChange,
    onHangleClickPrev,
    onHangleClickNext,
    onClearFilters
  }


}