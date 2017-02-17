import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="column-1">
          <p>stuff goes here</p>
          <p>and here</p>
          
        </div>
        <div className="column-2">and also here</div>
        <div className="column-3">and here as well</div>
        <div className="copyright">Copyright 2017 Candidate</div>
      </div>
    )
  }
}

export default Footer;
