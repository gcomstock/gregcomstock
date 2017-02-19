import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';
import { ProjectPreview } from '../ProjectPreview/ProjectPreview';

import './WorkView.css';

import { PandoraConsts } from '../Projects/Pandora/Pandora';



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

  randomizeLetterAnimation() {
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
      blocks.push(<Block3d key={i} cssClass='WorkView__title__letter' width='3.5rem' depth='2.75' animationDelay={rnd + 'ms'}>{letter}</Block3d>);
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
            <div className='App__body__scrollable__wrapper__leftFrame'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>

            <div className='WorkView__title'>
              {this.randomizeLetterAnimation()}
            </div>

            <div className='WorkView__subtitle'>
              DESIGN + DEVELOPMENT
            </div>


            <ProjectPreview
              route={PandoraConsts.ROUTE}
              title={PandoraConsts.TITLE}
              snippet={PandoraConsts.SNIPPET}
              credits={PandoraConsts.CREDITS}
              thumbnailPath={PandoraConsts.THUMBNAIL_PATH}
            />


            <div className='App__body__scrollable__wrapper__rightFrame'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default WorkView;