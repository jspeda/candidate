import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import hero from './america-hero.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="app-container">
          <div className="hero-container">
            <div className="hero">
              <img src={hero} />
              <h2><span>Join the movement today</span></h2>
              <form>
                <input className="form-email" type="text" placeholder="email address"></input>
                <input className="form-zip" type="text" placeholder="zip code"></input>
                <button>submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
