import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import Issues from './Issues';
import './index.css';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/issues" component={Issues} />
    </div>
  </Router>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
