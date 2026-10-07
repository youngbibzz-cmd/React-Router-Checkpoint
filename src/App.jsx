import { useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { initialMovies } from './data/movies.js'
import Home from './pages/Home.jsx'
import MovieDescription from './pages/MovieDescription.jsx'
import './App.css'

function App() {
  const [movies, setMovies] = useState(initialMovies)

  function addMovie(movie) {
    setMovies((currentMovies) => [movie, ...currentMovies])
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Reelhouse home">
          <span className="wordmark-mark" aria-hidden="true">R</span>
          <span>REELHOUSE</span>
        </Link>
        <span className="header-note">A little more cinema</span>
        <a className="header-link" href="#collection">THE COLLECTION <span aria-hidden="true">↘</span></a>
      </header>
      <Routes>
        <Route path="/" element={<Home movies={movies} onAddMovie={addMovie} />} />
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="site-footer">
        <span>REELHOUSE / YOUR PERSONAL FILM SHELF</span>
        <span>MADE FOR THE LOVE OF A GOOD STORY</span>
      </footer>
    </div>
  )
}

export default App