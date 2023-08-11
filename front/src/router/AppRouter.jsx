/* eslint-disable react-hooks/exhaustive-deps */
import { Routes,Route } from "react-router-dom"
import { CharactersPage } from "../characters"


export const AppRouter = () => {
  
  return (
    <Routes>
      <Route path="/" element={ <CharactersPage/> } />
    </Routes>
  )
}
