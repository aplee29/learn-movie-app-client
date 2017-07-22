import React, { Component } from 'react';

export default class AddMovie extends Component {
  // Passing 'props' down from the parent
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      release_year: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();

    // To pass movie object up to the parent
    const movie = this.state;
    this.props.addMovie(movie)

    // Resets the state after form submission
    this.setState({
      title: '',
      release_year: ''
    })
  }

  render() {
    // console.log(this.state)

    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="movie_title">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleOnChange}
          placeholder="Movie Title" />

          <label htmlFor="movie_release_year">Release Year</label>
          <input
            type="number"
            name="release_year"
            value={this.state.release_year}
            onChange={this.handleOnChange}
            placeholder="Movie Release Year" />

          <button>Add Movie</button>
      </form>
    )
  }
}
