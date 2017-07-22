const API_URL = process.env.REACT_APP_API_URL;

const MovieService = {
  fetchMovies: () => {
    return fetch(`${API_URL}/movies`)
      .then(response => response.json())
  },

  createMovie(movie) {
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    };

    return fetch(`${API_URL}/movies`, request)
      .then(response => response.json())
  }
}

export default MovieService;
