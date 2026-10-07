import { Link, useParams } from 'react-router-dom'

function MovieDescription({ movies }) {
  const { id } = useParams()
  const movie = movies.find((item) => item.id === Number(id))

  if (!movie) {
    return (
      <main className="details-page missing-movie">
        <p className="eyebrow"><span className="eyebrow-line" /> NOT IN THE COLLECTION</p>
        <h1>This film is<br /><em>off the reel.</em></h1>
        <Link className="back-button" to="/">← BACK TO HOME</Link>
      </main>
    )
  }

  return (
    <main className="details-page">
      <Link className="back-button" to="/">← BACK TO HOME</Link>
      <section className="film-intro">
        <div className="details-poster-frame">
          <img className="details-poster" src={movie.posterURL} alt={`${movie.title} poster`} />
          <span className="poster-index">REELHOUSE / Nº {String(movie.id).padStart(2, '0')}</span>
        </div>
        <div className="film-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> FEATURED FILM</p>
          <h1>{movie.title}</h1>
          <div className="detail-rating"><span aria-hidden="true">★</span> {movie.rating.toFixed(1)} <span className="rating-out-of">/ 5.0</span></div>
          <div className="copy-rule" />
          <h2>THE STORY</h2>
          <p className="film-description">{movie.description}</p>
          <p className="film-note">A story that stays with you.</p>
        </div>
      </section>
      <section className="trailer-section" aria-labelledby="trailer-title">
        <div className="trailer-heading">
          <h2 id="trailer-title">TAKE A FIRST LOOK</h2>
          <span>OFFICIAL TRAILER</span>
        </div>
        <div className="trailer-frame">
          <iframe
            src={movie.trailerURL}
            title={`${movie.title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  )
}

export default MovieDescription