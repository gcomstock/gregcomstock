import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import './ProjectView.css';

const ProjectView = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired
  },

  render() {
    return (
      <div className="App__wrapper">
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
