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
    scrollY: PropTypes.number
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

  render() {
    const App__body__scrollable__wrapper = classNames(
      'App__body__scrollable__wrapper', 'App__body__scrollable__wrapper--WorkView', {
        'App__body__scrollable__wrapper--intro': this.state.routeTransition === 'intro',
        'App__body__scrollable__wrapper--outro': this.state.routeTransition === 'outro'
      }
    );

    return (
      <div className='App__body'>
        <div className='App__body__scrollable' ref={(scrollableWrapper) => { this.scrollableWrapper = scrollableWrapper; }} onScroll={this.props.handleScroll}>
          <div className={App__body__scrollable__wrapper}>
            <div className='App__body__scrollable__wrapper__floor App__body__scrollable__wrapper__floor--WorkView'></div>
            <div className='App__body__scrollable__wrapper__leftFrame App__body__scrollable__wrapper__leftFrame--WorkView'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' noTop={true} noLeft={true} />
            </div>
            <div className='App__body__scrollable__wrapper__rightFrame App__body__scrollable__wrapper__rightFrame--WorkView'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' noTop={true} noRight={true} />
            </div>

            <SiteIntro/>

            <ProjectPreview
              route={PandoraConsts.ROUTE}
              title={PandoraConsts.TITLE}
              snippet={PandoraConsts.SNIPPET}
              thumbnailPath={PandoraConsts.THUMBNAIL_PATH}
            />

            <ProjectPreview
              route={PandoraAdsConsts.ROUTE}
              title={PandoraAdsConsts.TITLE}
              snippet={PandoraAdsConsts.SNIPPET}
              thumbnailPath={PandoraAdsConsts.THUMBNAIL_PATH}
            />

            <ProjectPreview
              route={ChristyNatsumiConsts.ROUTE}
              title={ChristyNatsumiConsts.TITLE}
              snippet={ChristyNatsumiConsts.SNIPPET}
              thumbnailPath={ChristyNatsumiConsts.THUMBNAIL_PATH}
            />

            <ProjectPreview
              route={PandoraWin10Consts.ROUTE}
              title={PandoraWin10Consts.TITLE}
              snippet={PandoraWin10Consts.SNIPPET}
              thumbnailPath={PandoraWin10Consts.THUMBNAIL_PATH}
            />

            <ProjectPreview
              route={RiddickartConsts.ROUTE}
              title={RiddickartConsts.TITLE}
              snippet={RiddickartConsts.SNIPPET}
              thumbnailPath={RiddickartConsts.THUMBNAIL_PATH}
            />

            <ProjectPreview
              route={ScreensimConsts.ROUTE}
              title={ScreensimConsts.TITLE}
              snippet={ScreensimConsts.SNIPPET}
              thumbnailPath={ScreensimConsts.THUMBNAIL_PATH}
            />

          </div>

          <div className='App__body__scrollable__footer'>
            <div className='App__body__scrollable__footer__content'>
              <h2>about me</h2>
              <div className='App__body__scrollable__footer__content__col'>
                <p>
                  asdasdasd sadasd
                </p>
              </div>
              <div className='App__body__scrollable__footer__content__col'>
                <p>
                  asdasdasd sadasd
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
});

export default WorkView;