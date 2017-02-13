import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';
import './ProjectView.css';

const ProjectView = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired
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
    }, 500);
  },

  componentWillLeave(callback) {
    this.setState({routeTransition: 'outro'});
    setTimeout(() => {
      this.setState({routeTransition: null});
      callback();
    }, 500);
  },

  render() {
    const App__body__content = classNames(
      'App__body__content', {
        'App__body__content--intro': this.state.routeTransition === 'intro',
        'App__body__content--outro': this.state.routeTransition === 'outro'
      }
    );

    return (
      <div className={App__body__content}>
        <div className='App__body__content__scrollable'>


          <div className='App__wrapper'>
            <div className="App__wrapper__leftFrame">
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>


            <div className='BaseView ProjectView'>
              <div className='ProjectView--leftCol'>
                <Block3d cssClass='WorkView__project__pic' width='100%' height='auto' depth='14' z='0'>
                  <img width='100%' src='work/pandora/pandora-hero-1.jpg'/>
                </Block3d>

                <Block3d cssClass='WorkView__project__pic' width='100%' height='auto' depth='14' z='0'>
                  <img width='100%' src='work/pandora/pandora-hero-1.jpg'/>
                </Block3d>

                <Block3d cssClass='WorkView__project__pic' width='100%' height='auto' depth='14' z='0'>
                  <img width='100%' src='work/pandora/pandora-hero-1.jpg'/>
                </Block3d>
              </div>
            </div>


            <div className="App__wrapper__rightFrame">
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>
          </div>
        </div>



        <div className='ProjectView--rightCol'>
          <Block3d cssClass='ProjectView__title' width='100%' height='auto' depth='2' z='-2'>
            {/*this.props.params.projectName*/}
            <h2>Pandora.com</h2>
          </Block3d>

          <Block3d cssClass='ProjectView__text' width='100%' height='auto' depth='1' z='-3'>
            <p>
              As a member of the web applications team, I am actively working on the new pandora.com. I collaborate
              closely with the design and product teams on core UI decisions, and help ensure that we bring production-quality
              code to millions of monthly listeners that handles complex asynchronous use cases between audio playback
              and advertising. Full release coming soon! <b>To opt in to the public beta, go to your Pandora.com settings
              page and follow the link at the bottom.</b>
            </p>
            <p>
              As a member of the web applications team, I am actively working on the new pandora.com. I collaborate
              closely with the design and product teams on core UI decisions, and help ensure that we bring production-quality
              code to millions of monthly listeners that handles complex asynchronous use cases between audio playback
              and advertising. Full release coming soon! <b>To opt in to the public beta, go to your Pandora.com settings
              page and follow the link at the bottom.</b>
            </p>
          </Block3d>
        </div>


      </div>
    );
  }

});

export default ProjectView;
