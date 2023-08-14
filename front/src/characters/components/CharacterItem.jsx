/* eslint-disable react/prop-types */

import { getBadgeColor, getEnvVariables } from "../../helpers"

export const CharacterItem = (props) => {

  const { character } = props

  const { VITE_API_URL } = getEnvVariables()

  const handleOpenPDF = () => {
    window.open(`${VITE_API_URL}/character/pdf/${character._id}`, "_blank", "noreferrer");
  }

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card mb-3 card-item-character" onClick={handleOpenPDF}>
        <div className="row g-0">
          <div className="col-4">
            <img className="img-card" src={character.image} alt={character.name} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <p className="card-text mb-0">
                <span className={`position-absolute p-1 mt-2 ${getBadgeColor(character.status)} border border-light rounded-circle`}>
                </span>
                <small className="text-muted m-3">
                  {character.status} -
                  {character.species}
                </small>
              </p>
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text mb-0">
                <small className="text-muted">Last known location:</small>
              </p>
              <p className="card-text">{character.location.name}</p>
              <p className="card-text mb-0">
                <small className="text-muted">First seen in:</small>
              </p>
              <p className="card-text">{character.origin.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
