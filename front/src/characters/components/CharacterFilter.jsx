/* eslint-disable react-hooks/exhaustive-deps */
import { useCharacterFetch } from "../../hooks"


export const CharacterFilter = () => {

  const { search, status, gender, onHandleChange } = useCharacterFetch()

  return (
    <div className="row">
      <div className="col-12 pb-3">
        <input 
          className="form-control input-filter" 
          type="text" 
          name="search" 
          placeholder="Buscar personaje..." 
          value={ search } 
          onChange={ onHandleChange } 
        />
      </div>
      <div className="col-6 mb3">
        <select 
          className="form-select input-filter" 
          placeholder="Select Status"
          name="status"
          value={ status } 
          onChange={ onHandleChange } 
        >
          <option value="">Select option</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="col-6 mb3">
        <select 
          className="form-select input-filter" 
          placeholder="Select Gender"
          name="gender"
          value={ gender } 
          onChange={ onHandleChange } 
        >
          <option value="">Select option</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      
    </div>
  )
}
