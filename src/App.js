import React, { Component } from 'react';
import Movies from './components/Movies';
import './App.css';

let movies = [
  { title: 'Jurassic Park', id: 1 },
  { title: 'Spiderman', id: 2 }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="sidebar">
          <Movies movies={movies} />
        </div>
        <div className="main-content">
          {/* <Movie /> */}
        </div>
      </div>
    );
  }
}

export default App;
