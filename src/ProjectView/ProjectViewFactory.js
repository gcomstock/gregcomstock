import React from 'react';
import classNames from 'classnames';
import Block3d from './../Block3d/Block3d';


export default function projectViewFactory(WrappedComponent, projectData) {
  return React.createClass({
    propTypes: {
      isMobile: React.PropTypes.bool.isRequired
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

    renderTitleHTML() {
      // to allow markup for the title...I like to break the title at just the right word.
      return {
        __html: projectData.TITLE
      }
    },

    renderLaunchButton() {
      if (projectData.EXTERNAL_URL) {
        return (
          <div className='ProjectDesc__content__buttonWrapper'>
            <Block3d
              cssClass='ProjectDesc__content__buttonWrapper__button button'
              externalUrl={projectData.EXTERNAL_URL}
              width='auto'
              height='auto'
              depth='1'
              z='0'
              noRight={true}
              padding={[1]}
            >
              <div className='button__text button__text--arrowRight'>launch project</div>
            </Block3d>
          </div>
        )
      }
    },

    renderOuterFrames() {
      if (!this.props.isMobile) {
        return (
          <div>
            <div className='App__body__scrollable__wrapper__floor'></div>
            <div className='App__body__scrollable__wrapper__outerFrame App__body__scrollable__wrapper__leftFrame'>
              <Block3d width='20rem' height='100%' depth='12' z='-4'/>
            </div>
            <div className='App__body__scrollable__wrapper__outerFrame App__body__scrollable__wrapper__rightFrame'>
              <Block3d width='20rem' height='100%' depth='12' z='-4'/>
            </div>
          </div>
        )
      }
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
          <div className='App__body__scrollable'>
            <div className='App__body__scrollable__wrapper'>
              {this.renderOuterFrames()}

              {/* TODO: pass in props for theme-specific js (maybe?) */}
              <WrappedComponent />
            </div>
          </div>
        </div>
      )
    }
  });
}