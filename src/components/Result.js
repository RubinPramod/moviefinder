import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<img className="movie-poster" src={result.Poster} />
			<h3 className="word-overflow-dots movie-title">{result.Title}</h3>
			<p className="movie-year">{result.Year}</p>
		</div>
	)
}

export default Result