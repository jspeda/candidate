import React, { Component } from 'react';
import './About.css';
import Footer from './Footer';
import Nav from './Nav';

class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>This is the about page</h1>
        <div className="placeholder"></div>
        <Footer />
      </div>
    )
  }
}

export default About;
