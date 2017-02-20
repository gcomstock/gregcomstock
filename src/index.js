import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import projectViewFactory from './ProjectView/ProjectViewFactory';
import './index.css';
import './breakpoints.css';


// all the content that gets composed into views
import WorkView from './WorkView/WorkView';

import { PandoraLayout, PandoraConsts } from './Projects/Project-pandora';
import { ChristynNatsumiLayout, ChristyNatsumiConsts } from './Projects/Project-christynatsumi';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WorkView}/>
      <Route path="/project/pandora" component={projectViewFactory(PandoraLayout, PandoraConsts)}/>
      <Route path="/project/christynatsumi" component={projectViewFactory(ChristynNatsumiLayout, ChristyNatsumiConsts)}/>
      <Route path="*" component={WorkView}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
