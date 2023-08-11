import { useCharacterFetch } from "../../hooks"

export const CharacterClearFilter = () => {

  const { onClearFilters } = useCharacterFetch()

  return (
    <div className="row">
      <div className="col-12 text-center">
        <h2>Uh-oh!</h2>
        <p>
          ¡Pareces perdido en tu viaje!
        </p>
        <button className="btn btn-dark" onClick={ onClearFilters }>Eliminar Filtros</button>
      </div>
    </div>
  )
}
