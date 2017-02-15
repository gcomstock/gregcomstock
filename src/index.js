import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import projectViewFactory from './Projects/ProjectViewFactory';
import './index.css';


// all the content that gets composed into views
import WorkView from './WorkView/WorkView';
import PandoraView, { PandoraConsts } from './Projects/Pandora/Pandora';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WorkView}/>
      <Route path="/project/pandora" component={projectViewFactory(PandoraView, PandoraConsts)}/>
      <Route path="*" component={WorkView}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
