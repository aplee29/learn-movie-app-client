import React from 'react';

// 'movies' will be passed to it as a prop
const Movies = ({ movies }) => {
  const renderMovies = movies.map(movie =>
    <p key={movie.id}>{movie.title}</p>
  )

  return (
    <div>
      {renderMovies}
    </div>
  )
}

export default Movies;
