import React, { Component } from 'react';
import './Donate.css';
import Nav from './Nav';
import Footer from './Footer';
import hero from './america-hero.jpg';
class Donate extends Component {
  render() {
  const amounts = [5, 25, 50, 75, 100, 300];
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="donate-box">
            <div className="donate-header">
              Contribute to Candidate today!
            </div>
            <div className="amounts-box">
              {amounts.map(item => <div className="amount">{item}</div>)}
              <div className="choose-amount">
                Choose your amount: $<input className="choose-input" type="number"></input>
              </div>
            </div>
            <div className="continue">
              <div><button>continue</button></div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Donate;
