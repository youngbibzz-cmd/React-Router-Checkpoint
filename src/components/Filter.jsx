function Filter({ title, onTitleChange, minimumRating, onRatingChange }) {
  return (
    <div className="filter-bar" aria-label="Filter movies">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <span className="sr-only">Search by title</span>
        <input
          type="search"
          value={title}
          onChange={(event) => onTitleChange(event.target.value)}
          placeholder="Find a film..."
        />
      </label>
      <label className="rating-filter">
        <span>RATING</span>
        <select value={minimumRating} onChange={(event) => onRatingChange(Number(event.target.value))}>
          <option value={0}>Any</option>
          <option value={4}>4.0+</option>
          <option value={4.5}>4.5+</option>
          <option value={4.8}>4.8+</option>
        </select>
      </label>
    </div>
  )
}

export default Filter