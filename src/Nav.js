import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="home-logo">Candidate for Office 2017</div>
        <div className="issues">issues</div>
        <div className="about">about</div>
        <div className="donate">donate</div>
      </div>
    )
  }
}

export default Nav;
