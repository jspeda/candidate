import React, { Component } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="home-logo"><Link to="/">Candidate</Link></div>
        <div className="issues"><Link to="/issues">issues</Link></div>
        <div className="about"><Link to="/about">about</Link></div>
        <div className="donate">donate</div>
      </div>
    )
  }
}

export default Nav;
