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

      const ProjectDesc__content = classNames(
        'ProjectDesc__content', {
          'ProjectDesc__content--intro': this.state.routeTransition === 'intro',
          'ProjectDesc__content--outro': this.state.routeTransition === 'outro'
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
            <div className={ProjectDesc__content}>
              <Block3d cssClass='ProjectDesc__content__title' width='100%' height='auto' depth='2' z='-2'>
                <h2>{ projectData.TITLE }</h2>
              </Block3d>

              <Block3d cssClass='ProjectDesc__content__text' width='100%' height='auto' depth='1' z='-3'>
                {projectData.TEXT.map((item) => {
                  return <p>{item}</p>;
                })}
              </Block3d>

              <div className='ProjectDesc__content__note ProjectDesc__content__note--responsibilities'>
                <Block3d cssClass='ProjectDesc__content__note__title' width='100%' depth='2' z='-2'>
                  <h3>key responsibilities</h3>
                </Block3d>
                <Block3d cssClass='ProjectDesc__content__note__text' width='100%' depth='1' z='-3'>
                  <ul>
                    {projectData.RESPONSIBILITIES.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </Block3d>
              </div>

              <div className='ProjectDesc__content__note'>
                <Block3d cssClass='ProjectDesc__content__note__title' width='100%' depth='2' z='-2'>
                  <h3>technology</h3>
                </Block3d>
                <Block3d cssClass='ProjectDesc__content__note__text' width='100%' depth='1' z='-3'>
                  <ul>
                    {projectData.TECHNOLOGIES.map((item) => {
                      return <li>{item}</li>;
                    })}
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