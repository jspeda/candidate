import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import './index.css';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
