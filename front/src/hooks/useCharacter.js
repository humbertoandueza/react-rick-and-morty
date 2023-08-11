/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { setCharacters } from '../store'
import { useEffect, useState } from "react"
import { useFetch, useForm } from "./"
import { getValuesFilter } from "../helpers"
export const useCharacterFetch = () => {

  const [ loadInitial, setLoadInitial ] = useState(false)
  const [ currentPage, setCurrentPage ] = useState(getValuesFilter?.currentPage || 1)
  const { search, status, gender,  onInputChange, onResetForm } = useForm(getValuesFilter)
  const { items, info } = useSelector(state => state.characters)
  const { data, isLoading, hasError, getFetch } = useFetch(`/character/?name=${search}&status=${status}&gender=${gender}&page=${currentPage}`)

  const dispatch = useDispatch()

  const getCharacters = () => {
    getFetch()
  }

  const onHandleChange = (evt) => {
    setLoadInitial(true)
    onInputChange(evt)
  }

  const onHangleClickPrev = (event) =>  {
    setLoadInitial(true)
    event.preventDefault();
    setCurrentPage((prev) => prev - 1)
  }

  const onHangleClickNext = (event) =>  {
    setLoadInitial(true)
    event.preventDefault();
    setCurrentPage((prev) => prev + 1)
  }

  const onClearFilters = () => {
    setLoadInitial(true)
    localStorage.clear()
    onResetForm()
    window.location.reload(false);
  }

  useEffect(() => {
    if(data) {
      dispatch( setCharacters(data) )
    }
    if(hasError){
      dispatch( setCharacters({
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
    if(loadInitial) {
      const filters = JSON.stringify({ search,status,gender,currentPage })
      localStorage.setItem( 'filters',filters )
      getCharacters()
    }
  }, [ search,status,gender,currentPage ])

  return {
    items,
    info,
    isLoading,
    search,
    status,
    gender,
    loadInitial,
    currentPage,
    setCurrentPage,
    getCharacters,
    setLoadInitial,
    onHandleChange,
    onHangleClickPrev,
    onHangleClickNext,
    onClearFilters
  }


}