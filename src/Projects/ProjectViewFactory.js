import React from 'react';
import classNames from 'classnames';
import Block3d from './../Block3d/Block3d';
import './ProjectView.css';


export default function projectViewFactory(WrappedComponent, projectData) {
  return React.createClass({
    //propTypes: {
    //  params: PropTypes.object,
    //  scrollY: PropTypes.number
    //},

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


    render() {
      const App__body__scrollable__wrapper = classNames(
        'App__body__scrollable__wrapper', {
          'App__body__scrollable__wrapper--intro': this.state.routeTransition === 'intro',
          'App__body__scrollable__wrapper--outro': this.state.routeTransition === 'outro'
        }
      );

      return (
        <div className='App__body'>


          <div className='App__body__scrollable'>
            <div className={App__body__scrollable__wrapper}>
              <div className='App__body__scrollable__wrapper__leftFrame'>
                <Block3d width='20rem' height='100%' depth='10' z='-4'/>
              </div>

              {/* TODO: pass in props (theme?) */}
              <WrappedComponent />

              <div className='App__body__scrollable__wrapper__rightFrame'>
                <Block3d width='20rem' height='100%' depth='10' z='-4'/>
              </div>
            </div>
          </div>


          <div className='ProjectDesc'>
            <div className='ProjectDesc__content'>
              <Block3d cssClass='ProjectDesc__content__title' width='100%' height='auto' depth='2' z='-2'>
                <h2>{ projectData.TITLE }</h2>
              </Block3d>

              <Block3d cssClass='ProjectDesc__content__text' width='100%' height='auto' depth='1' z='-3'>
                <p>
                  As a member of the web applications team, I am actively working on the new pandora.com. I collaborate
                  closely with the design and product teams on core UI decisions, and help ensure that we bring production-quality
                  code to millions of monthly listeners that handles complex asynchronous use cases between audio playback
                  and advertising. Full release coming soon! <b>To opt in to the public beta, go to your Pandora.com settings
                  page and follow the link at the bottom.</b>
                </p>
              </Block3d>

              <div className='ProjectDesc__content__note'>
                <Block3d cssClass='ProjectDesc__content__note__title' width='100%' depth='6' z='-8'>
                  <h2>technologies used</h2>
                </Block3d>
                <Block3d cssClass='ProjectDesc__content__note__text' width='100%' depth='5' z='-9'>
                  <ul>
                    <li>Javascript, backbone.js, WinJS</li>
                    <li>Moustache templating</li>
                    <li>CSS, SASS</li>
                  </ul>
                </Block3d>
              </div>
            </div>
          </div>


        </div>
      )
    }
  });
}