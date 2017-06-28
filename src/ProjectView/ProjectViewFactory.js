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

    renderProjectDesc(mode) {
      //return false;

      if (this.props.isMobile && mode === 'mobile' || !this.props.isMobile && mode === 'web') {
        return (
          <div className='ProjectDesc'>
            <div className='ProjectDesc__content'>
              {/*
              <Block3d
                cssClass='ProjectDesc__content__x'
                route={'/'}
                width='100%'
                height='100%'
                depth='0.25'
                noTop={true}
                noRight={true}
                padding={[0]}
              />
               */}

              <Block3d
                cssClass='ProjectDesc__content__title'
                width='100%'
                depth='2.5'
                noTop={true}
                noRight={true}
                isMobile={this.props.isMobile}
              >
                <div dangerouslySetInnerHTML={this.renderTitleHTML()} />
              </Block3d>

              <Block3d
                cssClass='ProjectDesc__content__text'
                width='100%'
                depth='2.5'
                noTop={true}
                noRight={true}
                isMobile={this.props.isMobile}
                padding={[0.75,1.25]}
              >
                {projectData.TEXT.map((item) => {
                  return <p>{item}</p>;
                })}
              </Block3d>

              <div className='ProjectDesc__content__note ProjectDesc__content__note--responsibilities'>
                <Block3d
                  cssClass='ProjectDesc__content__note__title'
                  width='100%'
                  depth='2.5'
                  noRight={true}
                  isMobile={this.props.isMobile}
                  padding={[0.75,1.25]}
                >
                  key responsibilities
                </Block3d>
                <Block3d
                  cssClass='ProjectDesc__content__note__text'
                  width='100%'
                  depth='2.5'
                  noRight={true}
                  isMobile={this.props.isMobile}
                  padding={[1,1.25]}
                >
                  <ul>
                    {projectData.RESPONSIBILITIES.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </Block3d>
              </div>

              {this.renderLaunchButton()}
            </div>
          </div>
        )
      }
    },

    renderOuterFrames() {
      if (!this.props.isMobile) {
        return (
          <div>
            <div className='App__body__scrollable__wrapper__floor'></div>
            <div className='App__body__scrollable__wrapper__leftFrame'>
              <Block3d width='20rem' height='100%' depth='14' z='-4'/>
            </div>
            <div className='App__body__scrollable__wrapper__rightFrame'>
              <Block3d width='20rem' height='100%' depth='14' z='-4'/>
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

          {this.renderProjectDesc('web')}

          <div className='App__body__scrollable'>
            <div className='App__body__scrollable__wrapper'>

              {this.renderProjectDesc('mobile')}

              {this.renderOuterFrames()}

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