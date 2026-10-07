import { useState } from 'react'

const emptyMovie = {
  title: '',
  description: '',
  posterURL: '',
  rating: '4.0',
  trailerURL: '',
}

function AddMovie({ onAddMovie, nextId }) {
  const [form, setForm] = useState(emptyMovie)
  const [error, setError] = useState('')

  function updateField(event) {
    setForm((currentForm) => ({ ...currentForm, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    try {
      const trailer = new URL(form.trailerURL)
      if (trailer.hostname !== 'www.youtube.com' || !trailer.pathname.startsWith('/embed/')) {
        setError('Use a YouTube embed URL, such as youtube.com/embed/VIDEO_ID.')
        return
      }
      new URL(form.posterURL)
      onAddMovie({ ...form, id: nextId, rating: Number(form.rating) })
      setForm(emptyMovie)
      setError('')
      event.currentTarget.closest('details').open = false
    } catch {
      setError('Enter valid poster and trailer URLs.')
    }
  }

  return (
    <details className="add-movie">
      <summary><span aria-hidden="true">＋</span> ADD A FILM</summary>
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <label>Title<input name="title" value={form.title} onChange={updateField} required maxLength={100} /></label>
        <label>Description<textarea name="description" value={form.description} onChange={updateField} required rows="3" /></label>
        <div className="form-row">
          <label>Poster image URL<input name="posterURL" type="url" value={form.posterURL} onChange={updateField} required /></label>
          <label>Rating (0–5)<input name="rating" type="number" min="0" max="5" step="0.1" value={form.rating} onChange={updateField} required /></label>
        </div>
        <label>YouTube embed URL<input name="trailerURL" type="url" value={form.trailerURL} onChange={updateField} placeholder="https://www.youtube.com/embed/..." required /></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="primary-button" type="submit">ADD TO COLLECTION <span aria-hidden="true">↗</span></button>
      </form>
    </details>
  )
}

export default AddMovie