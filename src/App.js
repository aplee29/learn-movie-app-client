import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2>Nav bar</h2>
        </div>
        <div className="sidebar">
          <h2>side bar</h2>
        </div>
        <div className="main-content">
          <h2>main content</h2>
        </div>
      </div>
    );
  }
}

export default App;
