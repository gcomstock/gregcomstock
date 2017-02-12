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
    const App__wrapper = classNames(
      'App__wrapper', {
        'App__wrapper--intro': this.state.routeTransition === 'intro',
        'App__wrapper--outro': this.state.routeTransition === 'outro'
      }
    );

    return (
      <div className={App__wrapper}>
        <div className="App__wrapper__leftFrame">
          <Block3d width='20rem' height='100%' depth='10' z='-4' />
        </div>


      <div className='BaseView ProjectView'>
        <div className='WorkView__subtitle'>
          {this.props.params.projectName}
        </div>
      </div>



        <div className="App__wrapper__rightFrame">
          <Block3d width='20rem' height='100%' depth='10' z='-4' />
        </div>
      </div>
    );
  }

});

export default ProjectView;
