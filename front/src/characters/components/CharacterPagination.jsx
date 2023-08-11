
import { useCharacterFetch } from "../../hooks"
export const CharacterPagination = () => {

  const { info, onHangleClickNext, onHangleClickPrev } = useCharacterFetch()

  return (
    <nav className="pagination-wrapper pt-5">
      <ul className="pagination">
        <li className="page-item">
          <a 
            className={`page-link ${!info.prev && 'disabled'}`} 
            href="#" 
            onClick={ onHangleClickPrev }>
              <span aria-hidden="true" className="px-2">&laquo;</span>
              Previous
          </a>
        </li>
        <li className="page-item">
          <a 
            className={`page-link ${!info.next && 'disabled'}`}  
            href="#" 
            onClick={ onHangleClickNext }>
              Next
              <span aria-hidden="true" className="px-2">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
