import React from 'react';
import classNames from 'classnames';
import Block3d from './../Block3d/Block3d';


export default function projectViewFactory(WrappedComponent, projectData) {
  return React.createClass({
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
              noRight={true}>
              <h3>launch project</h3>
            </Block3d>
          </div>
        )
      }
    },

    render() {
      const App__body__scrollable__wrapper = classNames(
        'App__body__scrollable__wrapper', {
          'App__body__scrollable__wrapper--intro': this.state.routeTransition === 'intro',
          'App__body__scrollable__wrapper--outro': this.state.routeTransition === 'outro'
        }
      );

      const ProjectDesc__content = classNames(
        'ProjectDesc__content', {
          'ProjectDesc__content--intro': this.state.routeTransition === 'intro',
          'ProjectDesc__content--outro': this.state.routeTransition === 'outro'
        }
      );

      return (
        <div className='App__body'>


          <div className='ProjectDesc'>
            <div className={ProjectDesc__content}>
              <Block3d cssClass='ProjectDesc__content__x' route={'/'} depth='0.25' z='0' noTop={true} noRight={true}>
                <svg id='close'>
                  <line id='close1' fill='none' stroke='#000000' stroke-width='2' stroke-miterlimit='10' x1='0.35rem' y1='0.35rem' x2='1.15rem' y2='1.15rem'/>
                  <line id='close2' fill='none' stroke='#000000' stroke-width='2' stroke-miterlimit='10' x1='0.35rem' y1='1.15rem' x2='1.15rem' y2='0.35rem'/>
                </svg>
              </Block3d>

              <Block3d cssClass='ProjectDesc__content__title' width='100%' height='auto' depth='2' z='0' noTop={true} noRight={true}>
                <h2>{ projectData.TITLE }</h2>
              </Block3d>

              <Block3d cssClass='ProjectDesc__content__text' width='100%' height='auto' depth='1' z='-1' noTop={true} noRight={true}>
                {projectData.TEXT.map((item) => {
                  return <p>{item}</p>;
                })}
              </Block3d>

              <div className='ProjectDesc__content__note--responsibilities'>
                <Block3d cssClass='ProjectDesc__content__note__title' width='100%' depth='2' z='0' noTop={true} noRight={true}>
                  <h3>key responsibilities</h3>
                </Block3d>
                <Block3d cssClass='ProjectDesc__content__note__text' width='100%' depth='1' z='-1' noTop={true} noRight={true}>
                  <ul>
                    {projectData.RESPONSIBILITIES.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </Block3d>
              </div>

              <div className='ProjectDesc__content__note--technology'>
                <Block3d cssClass='ProjectDesc__content__note__title' width='100%' depth='2' z='0' noTop={true} noRight={true}>
                  <h3>technology</h3>
                </Block3d>
                <Block3d cssClass='ProjectDesc__content__note__text' width='100%' depth='1' z='-1' noTop={true} noRight={true}>
                  <ul>
                    {projectData.TECHNOLOGIES.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </Block3d>
              </div>

              {this.renderLaunchButton()}
            </div>
          </div>


          <div className='App__body__scrollable'>
            <div className={App__body__scrollable__wrapper}>
              <div className='App__body__scrollable__wrapper__floor'></div>
              <div className='App__body__scrollable__wrapper__leftFrame'>
                <Block3d width='20rem' height='100%' depth='10' z='-4'/>
              </div>
              <div className='App__body__scrollable__wrapper__rightFrame'>
                <Block3d width='20rem' height='100%' depth='10' z='-4'/>
              </div>


              <div className='App__body__scrollable__wrapper__content'>

                {/* TODO: pass in props (theme?) */}
                <WrappedComponent />

              </div>
            </div>


          </div>
        </div>
      )
    }
  });
}