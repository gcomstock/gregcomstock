import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Block3d from '../Block3d/Block3d';
import { SiteIntro } from '../SiteIntro/SiteIntro';
import { SiteFooter } from '../SiteFooter/SiteFooter';
import { ProjectPreview } from '../ProjectPreview/ProjectPreview';


import { Content as PandoraContent } from '../Projects/Project-pandora';
import { Content as PandoraAdsContent } from '../Projects/Project-pandora-ads';
import { Content as PandoraInternalToolsContent } from '../Projects/Project-pandora-internal-tools';
import { Content as PandoraWin10Content } from '../Projects/Project-pandoraWin10';
import { Content as DADContent } from '../Projects/Project-display-ad-design';
import { Content as ChristyNatsumiContent } from '../Projects/Project-christynatsumi';
import { Content as RiddickartContent } from '../Projects/Project-riddickart';
import { Content as ScreensimContent } from '../Projects/Project-screensim';


const WorkView = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired,
    handleScroll: PropTypes.func,
    scrollY: PropTypes.number,
    isMobile: PropTypes.bool.isRequired,
    theme: PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      routeTransition: null
    }
  },

  componentWillEnter(callback) {
    this.setState({routeTransition: 'intro'});
    setTimeout(() => {
      this.setState({routeTransition: null});
      callback();
    }, 600);
  },

  componentWillLeave(callback) {
    this.setState({routeTransition: 'outro'});
    setTimeout(() => {
      this.setState({routeTransition: null});
      callback();
    }, 600);
  },

  componentDidMount() {
    // set scroll position to where it was when user navigated away
    this.scrollableWrapper.scrollTop = this.props.scrollY;
  },

  renderContent() {
    return (
      <div className='WorkView'>
        <div className='WorkView__SiteIntroSpacer'>
        </div>
        <div className='WorkView__wrapper'>
          { this.renderProjectPreviews() }
          { this.renderSideFrames() }
        </div>
      </div>
    );
  },

  renderSideFrames() {
    if (!this.props.isMobile) {
      return (
        <div>
          <div className='App__body__scrollable__wrapper__outerFrame App__body__scrollable__wrapper__leftFrame App__body__scrollable__wrapper__leftFrame--WorkView'>
            <Block3d
              width='20rem'
              height='100%'
              depth='10'
              z='-6'
              noLeft={true}
              isMobile={this.props.isMobile}
            />
          </div>
          <div className='App__body__scrollable__wrapper__outerFrame App__body__scrollable__wrapper__rightFrame App__body__scrollable__wrapper__rightFrame--WorkView'>
            <Block3d
              width='20rem'
              height='100%'
              depth='10'
              z='-6'
              noRight={true}
              isMobile={this.props.isMobile}
            />
          </div>
          <div className='App__body__scrollable__wrapper__floor App__body__scrollable__wrapper__floor--WorkView'></div>
        </div>
      )
    }
  },

  renderProjectPreviews() {
    return (
      <div className='wrapper'>
        <ProjectPreview
          route={PandoraContent.ROUTE}
          title={PandoraContent.TITLE}
          snippet={PandoraContent.PREVIEW_SNIPPET}
          thumbnailPath={PandoraContent.PREVIEW_THUMBNAILPATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={PandoraAdsContent.ROUTE}
          title={PandoraAdsContent.TITLE}
          snippet={PandoraAdsContent.PREVIEW_SNIPPET}
          thumbnailPath={PandoraAdsContent.PREVIEW_THUMBNAILPATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={ChristyNatsumiContent.ROUTE}
          title={ChristyNatsumiContent.TITLE}
          snippet={ChristyNatsumiContent.PREVIEW_SNIPPET}
          thumbnailPath={ChristyNatsumiContent.PREVIEW_THUMBNAILPATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={PandoraInternalToolsContent.ROUTE}
          title={PandoraInternalToolsContent.TITLE}
          snippet={PandoraInternalToolsContent.PREVIEW_SNIPPET}
          thumbnailPath={PandoraInternalToolsContent.PREVIEW_THUMBNAILPATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={RiddickartContent.ROUTE}
          title={RiddickartContent.TITLE}
          snippet={RiddickartContent.PREVIEW_SNIPPET}
          thumbnailPath={RiddickartContent.PREVIEW_THUMBNAILPATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={PandoraWin10Content.ROUTE}
          title={PandoraWin10Content.TITLE}
          snippet={PandoraWin10Content.PREVIEW_SNIPPET}
          thumbnailPath={PandoraWin10Content.PREVIEW_THUMBNAILPATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={DADContent.ROUTE}
          title={DADContent.TITLE}
          snippet={DADContent.PREVIEW_SNIPPET}
          thumbnailPath={DADContent.PREVIEW_THUMBNAILPATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={ScreensimContent.ROUTE}
          title={ScreensimContent.TITLE}
          snippet={ScreensimContent.PREVIEW_SNIPPET}
          thumbnailPath={ScreensimContent.PREVIEW_THUMBNAILPATH}
          isMobile={this.props.isMobile}
        />

      </div>
    )
  },

  render() {
    const App__body = classNames(
      'App__body', {
        'App__body--webIntro': this.state.routeTransition === 'intro' && !this.props.isMobile,
        'App__body--webOutro': this.state.routeTransition === 'outro' && !this.props.isMobile,
        'App__body--mobileIntro': this.state.routeTransition === 'intro' && this.props.isMobile,
        'App__body--mobileOutro': this.state.routeTransition === 'outro' && this.props.isMobile
      }
    );

    return (
      <div className={App__body}>
        <div className='App__body__scrollable' ref={(scrollableWrapper) => { this.scrollableWrapper = scrollableWrapper; }} onScroll={this.props.handleScroll}>
          <div className='App__body__scrollable__wrapper App__body__scrollable__wrapper--WorkView'>

            <SiteIntro isMobile={this.props.isMobile} scrollY={this.props.scrollY} theme={this.props.theme}/>
            { this.renderContent() }

          </div>
          <SiteFooter/>
        </div>
      </div>
    );
  }
});

export default WorkView;