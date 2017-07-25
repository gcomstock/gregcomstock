import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import projectViewFactory from './ProjectView/ProjectViewFactory';
import './css/base.css';

// all the content that gets composed into views
import WorkView from './WorkView/WorkView';

import { Layout as PandoraLayout, Content as PandoraContent } from './Projects/Project-pandora';
import { Layout as ChristyNatsumiLayout, Content as ChristyNatsumiContent } from './Projects/Project-christynatsumi';
import { Layout as PandoraAdsLayout, Content as PandoraAdsContent } from './Projects/Project-pandora-ads';
import { PandoraWin10Layout, PandoraWin10Consts } from './Projects/Project-pandoraWin10';
import { RiddickartLayout, RiddickartConsts } from './Projects/Project-riddickart';
import { ScreensimLayout, ScreensimConsts } from './Projects/Project-screensim';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WorkView}/>
      <Route path="/project/pandora"             component={projectViewFactory(PandoraLayout, PandoraContent)}/>
      <Route path="/project/pandora-display-ads" component={projectViewFactory(PandoraAdsLayout, PandoraAdsContent)}/>
      <Route path="/project/pandora-windows10"   component={projectViewFactory(PandoraWin10Layout, PandoraWin10Consts)}/>
      <Route path="/project/christynatsumi"      component={projectViewFactory(ChristyNatsumiLayout, ChristyNatsumiContent)}/>
      <Route path="/project/riddickart"          component={projectViewFactory(RiddickartLayout, RiddickartConsts)}/>
      <Route path="/project/screensim"           component={projectViewFactory(ScreensimLayout, ScreensimConsts)}/>
      <Route path="*" component={WorkView}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
