import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WorkView from './WorkView/WorkView';
import ProjectView from './ProjectView/ProjectView';
import hoc from './hoc';

import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'


const test = hoc(ProjectView);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WorkView}/>
      <Route path="/project/:projectName" component={test}/>
      <Route path="*" component={WorkView}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
