import React, { Component } from 'react';
import './Issues.css';
import Footer from './Footer';
import Nav from './Nav';

class Issues extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>this is the issues page!</h1>
        <div className="placeholder"></div>
        <Footer />
      </div>
    )
  }
}

export default Issues;
