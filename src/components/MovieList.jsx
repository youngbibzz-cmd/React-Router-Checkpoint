import MovieCard from './MovieCard.jsx'

function MovieList({ movies }) {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-state-mark" aria-hidden="true">∅</span>
        <p>No films match those filters.</p>
        <span>Try a different title or lower the rating.</span>
      </div>
    )
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  )
}

export default MovieList