import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';
import { ProjectPreview } from '../ProjectPreview/ProjectPreview';

import './WorkView.css';

import { PandoraConsts } from '../Projects/Project-pandora';
import { ChristyNatsumiConsts } from '../Projects/Project-christynatsumi';



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

  populateTitle() {
    const title = ['G','R','E','G','C','O','M','S','T','O','C','K'];

    let blocks = [];
    title.forEach( (letter, i) => {
      //const min = 100;
      //const max = 200 * i;
      //const rnd = Math.floor(Math.random() * (max - min)) + min;
      const rnd = i * 150;

      if (i === 4) {
        blocks.push(<br key={i+'br'}/>);
      }
      blocks.push(<Block3d key={i} cssClass='WorkView__siteIntro__title__letter' depth='1.5' animationDelay={rnd + 'ms'}>{letter}</Block3d>);
    });
    return blocks;
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
            <div className='App__body__scrollable__wrapper__leftFrame App__body__scrollable__wrapper__leftFrame--WorkView'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>

            <Block3d cssClass='App__body__scrollable__wrapper__floor' width='100%' height='100%' depth='10' z='-14' />


            <div className='WorkView__siteIntro'>
              <div className='WorkView__siteIntro__title'>
                { this.populateTitle() }
                <div className='WorkView__siteIntro__title__subtitle'>
                  <h1>DESIGN + DEVELOPMENT</h1>
                </div>
              </div>
              <div className='WorkView__siteIntro__bg'></div>
            </div>

            <Block3d cssClass='WorkView__viewWork' width='auto' height='auto' depth='1' z='0'>
              <h2>view work</h2>
            </Block3d>



            <ProjectPreview
              route={PandoraConsts.ROUTE}
              title={PandoraConsts.TITLE}
              snippet={PandoraConsts.SNIPPET}
              credits={PandoraConsts.CREDITS}
              thumbnailPath={PandoraConsts.THUMBNAIL_PATH}
            />

            <ProjectPreview
              route={ChristyNatsumiConsts.ROUTE}
              title={ChristyNatsumiConsts.TITLE}
              snippet={ChristyNatsumiConsts.SNIPPET}
              credits={ChristyNatsumiConsts.CREDITS}
              thumbnailPath={ChristyNatsumiConsts.THUMBNAIL_PATH}
            />


            <div className='App__body__scrollable__wrapper__rightFrame App__body__scrollable__wrapper__rightFrame--WorkView'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default WorkView;