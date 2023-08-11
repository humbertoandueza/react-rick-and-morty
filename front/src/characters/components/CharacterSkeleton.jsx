
export const CharacterSkeleton = () => {
  return (
    <div className="col-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img"  focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-3"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-3"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
