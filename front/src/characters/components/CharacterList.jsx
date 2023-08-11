/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import backgroundHeader from '../../assets/header.svg';
import backgroundFooter from '../../assets/footer.svg';
import logoImage from '../../assets/logo.png';
import { useCharacterFetch } from "../../hooks/";
import { 
  CharacterItem, 
  CharacterFilter, 
  CharacterSkeleton, 
  CharacterPagination, 
  CharacterClearFilter } from "../";

export const CharactersList = () => {

  const { items, isLoading, getCharacters } = useCharacterFetch()
  const [characters, setCharacters] = useState([])

  const skeletonCharacters = Array.from({ length: 20 }).map(( _,index ) => {
    return <CharacterSkeleton  key={ index } />
  })

  const styleHeader = {
    backgroundImage: `url(${backgroundHeader})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',
  }

  const styleLogo = {
    width: '347px'
  }

  const styleFooter = {
    backgroundImage: `url(${backgroundFooter})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '363px'
  }

  useEffect(() => {
    getCharacters()
  }, [])

  useEffect(() => {
    if(items) {
      const characters = items.map(( character,index ) => {
        return <CharacterItem  character={ character } key={ index } />
      })
      setCharacters(characters)
    }
  }, [items])
  
  
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center" 
          style={styleHeader}>
        <div className="col-12 text-center">
          <img src={logoImage} style={styleLogo} alt="logo" />
        </div>
            <div className="col-12 col-md-6">
              <CharacterFilter />
            </div>
        </div>
        <div className="container-fluid" >
          <div className="row p-3 p-md-5">
            { 
              (isLoading) 
              ?
              skeletonCharacters
              : characters 
            }
            {
              (!isLoading && !items?.length) 
              ?
                <CharacterClearFilter />
              : 
                <div className="col-12">
                  <CharacterPagination />
                </div>
            }
          </div>
        </div>
      </div>
      <div className="footer" style={styleFooter}></div>
    </>
  )
}
