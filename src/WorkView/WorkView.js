import React, { PropTypes } from 'react';
import classNames from 'classnames';


import Block3d from '../Block3d/Block3d';
import { SiteIntro } from '../SiteIntro/SiteIntro';
import { ProjectPreview } from '../ProjectPreview/ProjectPreview';


import { PandoraConsts } from '../Projects/Project-pandora';
import { PandoraAdsConsts } from '../Projects/Project-pandora-ads';
import { PandoraWin10Consts } from '../Projects/Project-pandoraWin10';
import { ChristyNatsumiConsts } from '../Projects/Project-christynatsumi';
import { RiddickartConsts } from '../Projects/Project-riddickart';
import { ScreensimConsts } from '../Projects/Project-screensim';



const WorkView = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired,
    handleScroll: PropTypes.func,
    scrollY: PropTypes.number,
    isMobile: PropTypes.bool.isRequired
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
      <div>
        <div className='yerp wrapper'>
        </div>
        <div className='yerpDerp wrapper'>
          { this.renderProjectPreviews() }
          { this.renderSideFrames() }
        </div>
      </div>
    );

    { this.renderProjectPreviews(); }
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
          route={PandoraConsts.ROUTE}
          title={PandoraConsts.PREVIEW_TITLE}
          snippet={PandoraConsts.PREVIEW_SNIPPET}
          thumbnailPath={PandoraConsts.PREVIEW_THUMBNAILPATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={PandoraAdsConsts.ROUTE}
          title={PandoraAdsConsts.TITLE}
          snippet={PandoraAdsConsts.SNIPPET}
          thumbnailPath={PandoraAdsConsts.THUMBNAIL_PATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={ChristyNatsumiConsts.ROUTE}
          title={ChristyNatsumiConsts.TITLE}
          snippet={ChristyNatsumiConsts.SNIPPET}
          thumbnailPath={ChristyNatsumiConsts.THUMBNAIL_PATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={PandoraWin10Consts.ROUTE}
          title={PandoraWin10Consts.TITLE}
          snippet={PandoraWin10Consts.SNIPPET}
          thumbnailPath={PandoraWin10Consts.THUMBNAIL_PATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={RiddickartConsts.ROUTE}
          title={RiddickartConsts.TITLE}
          snippet={RiddickartConsts.SNIPPET}
          thumbnailPath={RiddickartConsts.THUMBNAIL_PATH}
          isMobile={this.props.isMobile}
        />

        <ProjectPreview
          route={ScreensimConsts.ROUTE}
          title={ScreensimConsts.TITLE}
          snippet={ScreensimConsts.SNIPPET}
          thumbnailPath={ScreensimConsts.THUMBNAIL_PATH}
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

            <SiteIntro isMobile={this.props.isMobile} scrollY={this.props.scrollY}/>

            { this.renderContent() }
          </div>

          <div className='App__body__scrollable__footer'>
            <div className='App__body__scrollable__footer__content'>
              <div className='App__body__scrollable__footer__content__title'>
                about me
              </div>
              <div className='App__body__scrollable__footer__contentWrap'>
                <div className='App__body__scrollable__footer__content__col'>
                  <p>
                    I hold a lifelong passion for good design. With over five years of industry experience as a designer,
                    it became increasingly important to me to preserve the integrity and vision of a product's design.
                    How a product feels, its inertia, and its flow, is best expressed and communicated with an understanding
                    of the final implementation. Seeking this knowledge led me down the path of front-end development,
                    and made me realize just how creative code can be.
                  </p>
                </div>
                <div className='App__body__scrollable__footer__content__col'>
                  <p>
                    I'm not striving to be the most knowledgeable distributed systems engineer, and most likely won't be the
                    candidate to make sweeping architectural decisions about an application. However, if you're looking for
                    an exceptionally visually sensitive developer that can bring a user interface to life, talk at length with
                    designers about what can and can't be done under what time frames, and always has the user experience at the
                    forefront of their mind, <a href='https://www.linkedin.com/in/gregcomstock/' target='_blank'>we should talk</a>!
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
});

export default WorkView;