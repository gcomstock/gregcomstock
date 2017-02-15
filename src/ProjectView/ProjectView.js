import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';
import './ProjectView.css';

const ProjectView = React.createClass({
  propTypes: {
    params: PropTypes.object,
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

  render() {
    const App__body__scrollable__wrapper = classNames(
      'App__body__scrollable__wrapper', {
        'App__body__scrollable__wrapper--intro': this.state.routeTransition === 'intro',
        'App__body__scrollable__wrapper--outro': this.state.routeTransition === 'outro'
      }
    );

    return (
      <div className='ProjectPics'>


        <Block3d cssClass='ProjectPics__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora/pandora-hero-1.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectPics__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora/pandora-hero-2.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectPics__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora/pandora-hero-2.jpg' alt='portfolio'/>
        </Block3d>

      </div>
    );
  }

});

export default ProjectView;
