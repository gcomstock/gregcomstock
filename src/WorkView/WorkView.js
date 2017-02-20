import React, { PropTypes } from 'react';
import classNames from 'classnames';


import Block3d from '../Block3d/Block3d';
import { SiteIntro } from '../SiteIntro/SiteIntro';
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

            <SiteIntro/>

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