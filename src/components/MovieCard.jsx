import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <Link className="movie-card" to={`/movie/${movie.id}`} aria-label={`View ${movie.title} details`}>
      <div className="movie-poster-wrap">
        <img className="movie-poster" src={movie.posterURL} alt={`${movie.title} poster`} loading="lazy" />
        <span className="poster-open" aria-hidden="true">↗</span>
      </div>
      <div className="movie-card-info">
        <div>
          <h3>{movie.title}</h3>
          <span className="movie-card-caption">VIEW FILM DETAILS</span>
        </div>
        <span className="rating"><span aria-hidden="true">★</span> {movie.rating.toFixed(1)}</span>
      </div>
    </Link>
  )
}

export default MovieCard