import React, { Component } from 'react';
import Movies from './components/Movies';
import MovieService from './services/MovieService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  // Ideal lifecycle method for API calls (fetching data)
  componentDidMount() {
    MovieService.fetchMovies().then(movies => this.setState({ movies }))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="sidebar">
          <Movies movies={this.state.movies} />
        </div>
        <div className="main-content">
          {/* <Movie /> */}
        </div>
      </div>
    );
  }
}

export default App;
