const API_URL = process.env.REACT_APP_API_URL;

const MovieService = {
  fetchMovies: () => {
    return fetch(`${API_URL}/movies`)
      .then(response => response.json())
  }
}

export default MovieService;
