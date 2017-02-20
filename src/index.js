import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import Issues from './Issues';
import About from './About';
import Donate from './Donate';
import './index.css';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/issues" component={Issues} />
      <Route exact path="/about" component={About} />
      <Route exact path="/donate" component={Donate} />
    </div>
  </Router>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
