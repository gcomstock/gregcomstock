import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import WorkView from './WorkView/WorkView';


//<Route path="*" component={NoMatch}/>

import './index.css';

import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/work" component={WorkView}/>
    </Route>
  </Router>,
  document.getElementById('root')
);


