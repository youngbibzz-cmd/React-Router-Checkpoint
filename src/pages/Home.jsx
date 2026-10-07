import { useState } from 'react'
import AddMovie from '../components/AddMovie.jsx'
import Filter from '../components/Filter.jsx'
import MovieList from '../components/MovieList.jsx'

function Home({ movies, onAddMovie }) {
  const [titleFilter, setTitleFilter] = useState('')
  const [minimumRating, setMinimumRating] = useState(0)
  const visibleMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.trim().toLowerCase()) && movie.rating >= minimumRating,
  )

  return (
    <main className="home-page" id="collection">
      <div className="collection-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> THE PERSONAL FILM JOURNAL</p>
          <h1>Stories worth<br /><em>staying for.</em></h1>
        </div>
        <p className="collection-note">A considered collection of films<br />to watch, revisit, and remember.</p>
      </div>
      <section className="collection-section" aria-labelledby="collection-title">
        <div className="section-heading">
          <div className="section-title-wrap">
            <h2 id="collection-title">THE COLLECTION</h2>
            <span className="count-label">{String(visibleMovies.length).padStart(2, '0')} FILMS</span>
          </div>
          <div className="collection-tools">
            <Filter
              title={titleFilter}
              onTitleChange={setTitleFilter}
              minimumRating={minimumRating}
              onRatingChange={setMinimumRating}
            />
            <AddMovie onAddMovie={onAddMovie} nextId={Math.max(0, ...movies.map((movie) => movie.id)) + 1} />
          </div>
        </div>
        <MovieList movies={visibleMovies} />
      </section>
    </main>
  )
}

export default Home