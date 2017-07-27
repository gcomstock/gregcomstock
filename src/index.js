import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import projectViewFactory from './ProjectView/ProjectViewFactory';
import './css/base.css';

// all the content that gets composed into views
import WorkView from './WorkView/WorkView';

import { Layout as PandoraLayout, Content as PandoraContent } from './Projects/Project-pandora';
import { Layout as PandoraAdsLayout, Content as PandoraAdsContent } from './Projects/Project-pandora-ads';
import { Layout as PandoraInternalToolsLayout, Content as PandoraInternalToolsContent } from './Projects/Project-pandora-internal-tools';
import { Layout as PandoraWin10Layout, Content as PandoraWin10Content } from './Projects/Project-pandoraWin10';
import { Layout as DADLayout, Content as DADContent } from './Projects/Project-display-ad-design';

import { Layout as ChristyNatsumiLayout, Content as ChristyNatsumiContent } from './Projects/Project-christynatsumi';
import { Layout as RiddickartLayout, Content as RiddickartContent } from './Projects/Project-riddickart';
import { Layout as ScreensimLayout, Content as ScreensimContent } from './Projects/Project-screensim';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WorkView}/>
      <Route path="/project/pandora"                component={projectViewFactory(PandoraLayout, PandoraContent)}/>
      <Route path="/project/pandora-display-ads"    component={projectViewFactory(PandoraAdsLayout, PandoraAdsContent)}/>
      <Route path="/project/pandora-internal-tools" component={projectViewFactory(PandoraInternalToolsLayout, PandoraInternalToolsContent)}/>
      <Route path="/project/pandora-windows10"      component={projectViewFactory(PandoraWin10Layout, PandoraWin10Content)}/>
      <Route path="/project/display-ad-design"      component={projectViewFactory(DADLayout, DADContent)}/>

      <Route path="/project/christynatsumi"         component={projectViewFactory(ChristyNatsumiLayout, ChristyNatsumiContent)}/>
      <Route path="/project/riddickart"             component={projectViewFactory(RiddickartLayout, RiddickartContent)}/>
      <Route path="/project/screensim"              component={projectViewFactory(ScreensimLayout, ScreensimContent)}/>
      <Route path="*" component={WorkView}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
