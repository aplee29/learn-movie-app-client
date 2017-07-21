const MovieService = {
  fetchMovies: () => {
    return fetch('/movies')
      .then(response => response.json())
  }
}

export default MovieService;
