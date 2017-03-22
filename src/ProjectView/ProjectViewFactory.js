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
              noRight={true}>
              <div className='button__text button__text--arrowRight'>launch project</div>
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
              <Block3d cssClass='ProjectDesc__content__x' route={'/'} width='100%' height='100%' depth='0.25' z='0' noTop={true} noRight={true}/>

              <Block3d
                cssClass='ProjectDesc__content__title'
                width='100%'
                depth='2'
                z='0'
                noTop={true}
                noRight={true}
                isMobile={this.props.isMobile}
              >
                <div dangerouslySetInnerHTML={this.renderTitleHTML()} />
              </Block3d>

              <Block3d
                cssClass='ProjectDesc__content__text'
                width='100%'
                depth='1'
                z='-1'
                noTop={true}
                noRight={true}
                isMobile={this.props.isMobile}
              >
                {projectData.TEXT.map((item) => {
                  return <p>{item}</p>;
                })}
              </Block3d>

              <div className='ProjectDesc__content__note--responsibilities'>
                <Block3d
                  cssClass='ProjectDesc__content__note__title'
                  width='100%'
                  depth='2'
                  z='0'
                  noTop={true}
                  noRight={true}
                  isMobile={this.props.isMobile}
                >
                  key responsibilities
                </Block3d>
                <Block3d
                  cssClass='ProjectDesc__content__note__text'
                  width='100%'
                  depth='1'
                  z='-1'
                  noTop={true}
                  noRight={true}
                  isMobile={this.props.isMobile}
                >
                  <ul>
                    {projectData.RESPONSIBILITIES.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </Block3d>
              </div>

              <div className='ProjectDesc__content__note--technology'>
                <Block3d
                  cssClass='ProjectDesc__content__note__title'
                  width='100%'
                  depth='2'
                  z='0'
                  noTop={true}
                  noRight={true}
                  isMobile={this.props.isMobile}
                >
                  technology
                </Block3d>
                <Block3d
                  cssClass='ProjectDesc__content__note__text'
                  width='100%'
                  depth='1'
                  z='-1'
                  noTop={true}
                  noRight={true}
                  isMobile={this.props.isMobile}
                >
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