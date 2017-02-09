import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <div class="nav-container">
          <div class="home-logo">Candidate for Office 2017</div>
          <div class="issues"></div>
          <div class="about"></div>
          <div class="donate"></div>
      </div>
    )
  }
}

export default Nav;
