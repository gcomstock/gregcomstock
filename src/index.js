import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WorkView from './WorkView/WorkView';
import ProjectView from './ProjectView/ProjectView';


import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WorkView}/>
      <Route path="/project/:projectName" component={ProjectView}/>
      <Route path="*" component={WorkView}/>
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
